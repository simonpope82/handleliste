const CH={'coop-extra':'Extra','kiwi':'KIWI','meny':'Meny','coop-obs':'Obs','coop-mega':'Mega'};
const CATS=[['frukt','🍎','Frukt og grønt',['eple','epler','banan','bananer','appelsin','sitron','pære','druer','jordbær','bringebær','blåbær','tomat','tomater','agurk','salat','paprika','løk','hvitløk','potet','poteter','gulrot','gulrøtter','brokkoli','blomkål','kål','avokado','sopp','mais','fruit','apple','apples','banana','bananas','orange','lemon','pear','grapes','strawberries','tomato','tomatoes','cucumber','lettuce','pepper','onion','onions','garlic','potato','potatoes','carrot','carrots','broccoli','mushrooms','avocado','grønnsaker','vegetables','frukt']],
['brod','🍞','Brød',['brød','grovbrød','loff','rundstykker','knekkebrød','lomper','tortilla','lefse','boller','bread','rolls','baguette','crispbread','wraps','bagels']],
['kjott','🥩','Kjøtt og fisk',['kjøtt','kjøttdeig','kylling','kyllingfilet','svin','bacon','pølse','pølser','skinke','biff','lam','laks','torsk','fisk','fiskekaker','reker','makrell','tunfisk','meat','mince','chicken','pork','sausage','sausages','ham','beef','steak','salmon','cod','fish','prawns','shrimp','tuna','pålegg']],
['meieri','🧀','Meieri og ost',['melk','lettmelk','helmelk','fløte','rømme','smør','margarin','ost','brunost','yoghurt','yogurt','egg','kesam','cottage','milk','cream','butter','cheese','eggs','creme']],
['torr','🍝','Tørrvarer',['pasta','spagetti','spaghetti','ris','mel','hvetemel','sukker','salt','havregryn','müsli','musli','frokostblanding','cornflakes','kaffe','te','kakao','nøtter','hermetikk','bønner','ketchup','majones','sennep','olje','krydder','sjokolade','godteri','chips','taco','syltetøy','honning','rice','flour','sugar','oats','cereal','coffee','tea','nuts','beans','oil','spices','chocolate','sweets','candy','jam','honey','soup','suppe']],
['frys','🧊','Frys',['is','iskrem','pizza','frossen','frosne','fryse','pommes','frites','ice','icecream','frozen','fries','peas','erter']],
['drikke','🥤','Drikke',['juice','jus','saft','brus','cola','vann','øl','farris','solo','pepsi','drink','drinks','water','beer','soda','squash','smoothie']],
['hus','🧻','Hus og hjem',['dopapir','toalettpapir','tørkepapir','papir','såpe','oppvask','oppvaskmiddel','vaskemiddel','tannkrem','sjampo','bleier','batterier','poser','folie','toilet','paper','soap','detergent','toothpaste','shampoo','nappies','diapers','batteries','bags','foil','kitchen roll']],
['annet','🛒','Annet',[]]];
let shops=[],S=JSON.parse(localStorage.hl||'{"items":[],"filter":"all"}');
const save=()=>localStorage.hl=JSON.stringify(S),$=id=>document.getElementById(id);
const norm=s=>s.toLowerCase().trim();
function cat(n){const w=norm(n).split(/\s+/);for(const c of CATS)for(const k of c[3]){if(w.includes(k)||(k.length>3&&norm(n).includes(k)))return c[0]}return 'annet'}
const icon=n=>CATS.find(c=>c[0]==cat(n))[1];
function logoOf(t){if(!t)return'';const ch=t.startsWith('shop:')?shops[+t.slice(5)].chain:t.slice(6);return`logos/${ch}.png`}
function nameOf(t){return t.startsWith('shop:')?shops[+t.slice(5)].name:CH[t.slice(6)]}
function matches(i){if(S.filter=='all'||!i.tag)return true;if(i.tag==S.filter)return true;
 const fc=S.filter.startsWith('shop:')?shops[+S.filter.slice(5)].chain:S.filter.slice(6);return i.tag=='chain:'+fc}
function render(){
 const vis=S.items.filter(matches),done=vis.filter(i=>i.done).length,p=vis.length?Math.round(done/vis.length*100):0;
 $('fill').style.width=p+'%';$('pct').textContent=vis.length?`${p}% ✔  ${done}/${vis.length}`:'🛒';
 const used=[...new Set(S.items.map(i=>i.tag).filter(Boolean))];
 $('chips').innerHTML=`<button class="chip ${S.filter=='all'?'on':''}" data-f="all">🛒 Alle</button>`+used.map(t=>`<button class="chip ${S.filter==t?'on':''}" data-f="${t}"><img src="${logoOf(t)}" alt="">${nameOf(t)}</button>`).join('');
 let h='';for(const c of CATS){const its=vis.filter(i=>cat(i.name)==c[0]).sort((a,b)=>a.done-b.done);if(!its.length)continue;
  h+=`<div class="cat">${c[1]} ${c[2]}</div>`+its.map(i=>`<div class="item ${i.done?'done':''}" data-id="${i.id}"><div class="tick">${i.done?'✔':''}</div><span style="font-size:30px">${icon(i.name)}</span><span class="name">${esc(i.name)}</span>${i.tag?`<img src="${logoOf(i.tag)}" alt="${nameOf(i.tag)}">`:''}<button class="del" data-del="${i.id}" aria-label="Slett">🗑️</button></div>`).join('')}
 $('list').innerHTML=h||'<div class="empty">🛒<br>＋</div>';}
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
function add(name,tag){name=name.trim();if(!name)return;name=name[0].toUpperCase()+name.slice(1);S.items.push({id:Date.now()+Math.random(),name,tag:tag||null,done:false});save();render()}
function find(n){n=norm(n);return S.items.find(i=>!i.done&&(norm(i.name)==n||norm(i.name).includes(n)||n.includes(norm(i.name))))}
$('chips').onclick=e=>{const b=e.target.closest('[data-f]');if(b){S.filter=b.dataset.f;save();render()}};
$('list').onclick=e=>{const d=e.target.closest('[data-del]');if(d){S.items=S.items.filter(i=>i.id!=d.dataset.del);save();return render()}
 const it=e.target.closest('.item');if(it){const i=S.items.find(x=>x.id==it.dataset.id);i.done=!i.done;save();render();if(navigator.vibrate)navigator.vibrate(30)}};
// add dialog
let pick=null,openChain=null;
function drawPicker(){
 $('tiles').innerHTML=Object.keys(CH).map(c=>`<button type="button" class="tile ${openChain==c?'on':''}" data-c="${c}"><img src="logos/${c}.png" alt="${CH[c]}"></button>`).join('');
 $('shops').innerHTML=openChain?[`<button type="button" class="${pick=='chain:'+openChain?'on':''}" data-t="chain:${openChain}"><span>⭐ ${CH[openChain]} (alle)</span></button>`].concat(
  shops.map((s,k)=>[s,k]).filter(([s])=>s.chain==openChain).sort((a,b)=>a[0].approx_km_from_as-b[0].approx_km_from_as)
  .map(([s,k])=>`<button type="button" class="${pick=='shop:'+k?'on':''}" data-t="shop:${k}"><span>📍 ${s.name}</span><span>${s.approx_km_from_as} km</span></button>`)).join(''):'';}
$('tiles').onclick=e=>{const b=e.target.closest('[data-c]');if(!b)return;openChain=openChain==b.dataset.c?null:b.dataset.c;pick=openChain?'chain:'+openChain:null;drawPicker()};
$('shops').onclick=e=>{const b=e.target.closest('[data-t]');if(b){pick=b.dataset.t;drawPicker()}};
$('plus').onclick=()=>{$('txt').value='';if(S.filter!='all'){pick=S.filter;openChain=logoOf(pick).slice(6,-4)}drawPicker();$('add').hidden=false;$('txt').focus()};
$('addf').onsubmit=e=>{e.preventDefault();$('txt').value.split(/,| og | and /).forEach(n=>add(n,pick));$('add').hidden=true;$('txt').blur()};
$('cancel').onclick=()=>{$('add').hidden=true};
// voice
function toast(t){$('toast').textContent=t;$('toast').style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>$('toast').style.display='none',3500)}
function say(t,lang){toast(t);if(!speechSynthesis)return;const u=new SpeechSynthesisUtterance(t);u.lang=lang;speechSynthesis.cancel();speechSynthesis.speak(u)}
function left(lang){const l=S.items.filter(i=>!i.done&&matches(i)).map(i=>i.name);const nb=lang.startsWith('nb');
 if(!l.length)return nb?'Ferdig! Alt er handlet.':'All done! Everything is bought.';
 return(nb?'Igjen: ':'Still to get: ')+l.join(', ')}
function handle(t,lang){t=norm(t).replace(/[.!?]/g,'');let m;const nb=lang.startsWith('nb');
 if(m=t.match(/^(?:legg til|legge til|kjøp|add|put|buy)\s+(.+)$/)){const ns=m[1].split(/,| og | and /).map(s=>s.replace(/^(some|litt|en|et|ei)\s+/,'').trim()).filter(Boolean);ns.forEach(n=>add(n,S.filter!='all'?S.filter:null));return say((nb?'La til ':'Added ')+ns.join(', ')+'. '+left(lang),lang)}
 if(m=t.match(/^(?:har|jeg har|i've got|i have got|i have|got|i got|done|ferdig med)\s+(?:(?:the|some|en|et|ei)\s+)?(.+?)(?:\s+(?:in|now|nå))?$/)){const ns=m[1].split(/,| og | and /).map(s=>s.replace(/^(the|some)\s+/,'').trim());const hit=[];
  ns.forEach(n=>{const i=find(n);if(i){i.done=true;hit.push(i.name)}});save();render();
  return say(hit.length?((nb?'Huket av ':'Ticked ')+hit.join(', ')+'. '+left(lang)):((nb?'Fant ikke ':'Could not find ')+m[1]),lang)}
 if(/igjen|mangler|what'?s left|left|remaining/.test(t))return say(left(lang),lang);
 say(nb?'Si: legg til melk, eller: har melk':'Say: add milk, or: I\'ve got milk',lang)}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
$('mic').onclick=()=>{if(!SR)return say('Mikrofon virker ikke i denne nettleseren. Prøv Chrome eller Safari.','nb-NO');
 const run=lang=>{const r=new SR();r.lang=lang;r.interimResults=false;r.maxAlternatives=1;$('mic').classList.add('live');
  r.onresult=e=>{const t=e.results[0][0].transcript;toast('🎤 '+t);const en=/^(add|put|buy|i've|i have|i got|got|what)/i.test(t);handle(t,en?'en-GB':lang)};
  r.onerror=e=>{$('mic').classList.remove('live');if(e.error=='language-not-supported'&&lang=='nb-NO')run('en-GB');else toast('🎤 ✖')};
  r.onend=()=>$('mic').classList.remove('live');try{r.start()}catch(x){if(lang=='nb-NO')run('en-GB')}};run('nb-NO')};
if(location.hash=='#demo'&&!S.items.length){[['Melk','chain:kiwi',1],['Poteter','shop:0',1],['Bananer','shop:0',0],['Brød',null,0],['Kylling','chain:coop-extra',0],['Ost',null,0],['Pizza',null,0],['Dopapir',null,0]].forEach(([n,t,d],k)=>S.items.push({id:k+1,name:n,tag:t,done:!!d}))}
fetch('shops.json',{cache:'no-cache'}).then(r=>r.json()).then(j=>{shops=j.shops;render()});
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js',{updateViaCache:'none'});
