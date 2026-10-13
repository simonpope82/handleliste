const CH={'coop-extra':'Extra','kiwi':'KIWI','meny':'Meny','coop-obs':'Obs','coop-mega':'Mega'};
const CATS=[["frukt", "🍎", "Frukt og grønt", ["frukt", "fruit", "grønt", "grønnsak", "grønnsaker", "vegetable", "vegetables", "veg", "eple", "epler", "apple", "apples", "banan", "bananer", "banana", "bananas", "appelsin", "appelsiner", "orange", "oranges", "klementin", "klementiner", "clementine", "mandarin", "sitron", "sitroner", "lemon", "lemons", "lime", "pære", "pærer", "pear", "pears", "drue", "druer", "grape", "grapes", "jordbær", "strawberry", "strawberries", "bringebær", "raspberry", "raspberries", "blåbær", "blueberry", "blueberries", "kiwi", "mango", "ananas", "pineapple", "melon", "vannmelon", "watermelon", "fersken", "peach", "plomme", "plum", "nektarin", "avokado", "avocado", "tomat", "tomater", "tomato", "tomatoes", "cherrytomat", "agurk", "agurker", "cucumber", "salat", "lettuce", "isberg", "ruccola", "rocket", "spinat", "spinach", "paprika", "pepper", "peppers", "chili", "løk", "onion", "onions", "rødløk", "vårløk", "purre", "leek", "hvitløk", "garlic", "potet", "poteter", "potato", "potatoes", "gulrot", "gulrøtter", "carrot", "carrots", "brokkoli", "broccoli", "blomkål", "cauliflower", "kål", "cabbage", "rosenkål", "sopp", "mushroom", "mushrooms", "champignon", "mais", "corn", "squash", "zucchini", "aubergine", "selleri", "celery", "rødbete", "beet", "ingefær", "ginger", "urter", "persille", "parsley", "basilikum", "basil", "koriander", "dill", "gressløk", "bama"]], ["brod", "🍞", "Brød", ["brød", "bread", "grovbrød", "loff", "rundstykke", "rundstykker", "roll", "rolls", "knekkebrød", "crispbread", "wasa", "lomper", "lompe", "tortilla", "tortillas", "lefse", "lefser", "bolle", "boller", "bun", "buns", "baguette", "ciabatta", "wraps", "wrap", "bagel", "bagels", "pita", "naan", "croissant", "croissanter", "rugbrød", "toast", "toastbrød", "kneipp"]], ["kjott", "🥩", "Kjøtt og fisk", ["kjøtt", "meat", "kjøttdeig", "karbonadedeig", "mince", "kylling", "chicken", "kyllingfilet", "kyllinglår", "kalkun", "turkey", "svin", "pork", "svinekotelett", "ribbe", "bacon", "pølse", "pølser", "sausage", "sausages", "wiener", "grillpølse", "skinke", "ham", "kokt", "salami", "pålegg", "biff", "beef", "steak", "entrecote", "indrefilet", "lam", "lamb", "fårikål", "kjøttkaker", "kjøttboller", "meatballs", "laks", "salmon", "torsk", "cod", "fisk", "fish", "fiskekaker", "fiskepinner", "fiskeboller", "sei", "hyse", "ørret", "reker", "shrimp", "prawns", "scampi", "makrell", "mackerel", "tunfisk", "tuna", "sild", "herring", "kaviar", "mills_kaviar", "gilde", "prior", "nortura", "stabburet", "leverpostei", "postei"]], ["meieri", "🧀", "Meieri og ost", ["melk", "milk", "lettmelk", "helmelk", "skummet", "skummetmelk", "ekstralett", "laktosefri", "fløte", "cream", "kremfløte", "matfløte", "rømme", "lettrømme", "crème", "creme", "fraiche", "smør", "butter", "margarin", "bremykt", "brelett", "ost", "cheese", "brunost", "geitost", "gulost", "norvegia", "jarlsberg", "cheddar", "mozzarella", "parmesan", "feta", "kremost", "philadelphia", "cottage", "yoghurt", "yogurt", "yoghurts", "skyr", "kesam", "egg", "eggs", "tine", "q", "synnøve", "kulturmelk", "biola", "cultura"]], ["torr", "🍝", "Tørrvarer", ["pasta", "spagetti", "spaghetti", "makaroni", "penne", "nudler", "noodles", "ris", "rice", "mel", "flour", "hvetemel", "sukker", "sugar", "salt", "pepper", "havregryn", "oats", "gryn", "müsli", "musli", "granola", "frokostblanding", "cereal", "cornflakes", "kaffe", "coffee", "te", "tea", "kakao", "cocoa", "nøtter", "nuts", "mandler", "hermetikk", "boks", "bønner", "beans", "kikerter", "linser", "ketchup", "majones", "mayo", "mayonnaise", "sennep", "mustard", "olje", "oil", "olivenolje", "krydder", "spices", "buljong", "taco", "tacokrydder", "tacoskjell", "saus", "sauce", "pesto", "syltetøy", "jam", "honning", "honey", "peanøttsmør", "nugatti", "sjokolade", "chocolate", "godteri", "sweets", "candy", "snacks", "chips", "potetgull", "kjeks", "biscuits", "cookies", "kaker", "cake", "suppe", "soup", "gjær", "yeast", "bakepulver", "vaniljesukker", "rosiner", "freia", "nidar", "idun", "toro", "mills", "regal", "kavli"]], ["frys", "🧊", "Frys", ["is", "iskrem", "ice", "icecream", "frossen", "frosne", "frozen", "fryse", "frys", "pizza", "grandiosa", "pommes", "frites", "fries", "erter", "peas", "wok", "fiskegrateng", "isbiter"]], ["drikke", "🥤", "Drikke", ["juice", "jus", "appelsinjuice", "eplejuice", "saft", "brus", "cola", "coca", "pepsi", "solo", "fanta", "sprite", "urge", "vann", "water", "farris", "imsdal", "mineralvann", "øl", "beer", "cider", "vin", "wine", "drink", "drinks", "soda", "squash", "smoothie", "tropicana", "sprudlevann"]], ["hus", "🧻", "Hus og hjem", ["dopapir", "toalettpapir", "toalett", "tørkepapir", "kjøkkenrull", "papir", "såpe", "soap", "håndsåpe", "oppvask", "oppvaskmiddel", "oppvasktabletter", "vaskemiddel", "detergent", "tøymykner", "tannkrem", "toothpaste", "tannbørste", "sjampo", "shampoo", "balsam", "dusjsåpe", "deodorant", "bleier", "nappies", "diapers", "våtservietter", "batteri", "batterier", "batteries", "poser", "bags", "søppelposer", "plastposer", "folie", "foil", "bakepapir", "plastfolie", "lyspærer", "stearinlys", "lys", "zalo", "omo", "lano", "lotus", "klut", "svamp"]], ["annet", "🛒", "Annet", []]];
const PHRASES={'hvit løk':'frukt','rød løk':'frukt','cherry tomater':'frukt','cherry tomat':'frukt','spring onion':'frukt','sweet potato':'frukt','søt potet':'frukt','kokt skinke':'kjott','røkt laks':'kjott','hel kylling':'kjott','kylling filet':'kjott','toalett papir':'hus','kjøkken papir':'hus','kitchen roll':'hus','toilet paper':'hus','toilet roll':'hus','washing up liquid':'hus','ice cream':'frys','frosne erter':'frys','peanut butter':'torr','olive oil':'torr','oliven olje':'torr','crème fraiche':'meieri','creme fraiche':'meieri','sour cream':'meieri','cream cheese':'meieri','cottage cheese':'meieri','orange juice':'drikke','apple juice':'drikke','eple juice':'drikke','appelsin juice':'drikke','coca cola':'drikke','tine melk':'meieri','q melk':'meieri','big one':'frys','hennig olsen':'frys','pepsi max':'drikke'};
const PH=Object.keys(PHRASES).sort((a,b)=>b.split(' ').length-a.split(' ').length);
const QTY=/^(\d+([.,]\d+)?(stk|st|l|dl|cl|ml|kg|g|gr|pk|pakke|pakker|x)?|stk|st|pk|pakke|pakker|l|dl|kg|g|liter|boks|bokser|x)$/i;
const BRANDS=new Set('tine q synnøve gilde prior freia nidar idun toro mills stabburet kavli lano zalo omo lotus bama coop xtra first price eldorado'.split(' '));
function split(txt){
 const out=[];
 txt.replace(/\r/g,'').split(/\n|,|;|•|·|\s+og\s+|\s+and\s+|\s+&\s+/i).forEach(seg=>{
  seg=seg.replace(/^\s*(\d+[.)]|[-*–—])\s+/,'').toLowerCase().replace(/[^\p{L}\p{N}.,'\- ]/gu,' ').trim();if(!seg)return;
  const w=seg.split(/\s+/);let note=[],i=0;
  while(i<w.length){if(QTY.test(w[i])){note.push(w[i]);i++;continue}
   let hit=null;for(const p of PH){const pw=p.split(' ');if(w.slice(i,i+pw.length).join(' ')==p){hit=pw.length;break}}
   let n=hit||1;if(!hit&&BRANDS.has(w[i])&&i+1<w.length&&!QTY.test(w[i+1]))n=2;const name=w.slice(i,i+n).join(' ');i+=n;
   while(i<w.length&&QTY.test(w[i])&&!(i+1<w.length&&/^\d/.test(w[i])&&!QTY.test(w[i+1])&&false)){ if(/^\d/.test(w[i])&&i+1<w.length&&!QTY.test(w[i+1]))break;note.push(w[i]);i++}
   out.push({name,note:note.join(' ')});note=[]}
  if(note.length&&out.length&&!out[out.length-1].note)out[out.length-1].note=note.join(' ')});
 return out}
function kwHit(w,k){return w==k||(k.length>=4&&(w.startsWith(k)||w.endsWith(k)))||(w.length>=5&&k.startsWith(w))}
function cat(n){n=norm(n);if(PHRASES[n])return PHRASES[n];for(const p of PH)if(n.includes(p))return PHRASES[p];
 const ws=n.split(/\s+/);for(let j=ws.length-1;j>=0;j--)for(const c of CATS)for(const k of c[3])if(kwHit(ws[j],k))return c[0];return'annet'}
let shops=[],LAY={},S=JSON.parse(localStorage.hl||'{"items":[],"filter":"shop:0","v":5}');
if(!S.v){S.v=5;S.filter='shop:0'}
const save=()=>localStorage.hl=JSON.stringify(S),$=id=>document.getElementById(id);
const norm=s=>s.toLowerCase().trim();
const icon=n=>CATS.find(c=>c[0]==cat(n))[1];
function logoOf(t){if(!t)return'';const ch=t.startsWith('shop:')?shops[+t.slice(5)].chain:t.slice(6);return`logos/${ch}.png`}
function nameOf(t){return t.startsWith('shop:')?shops[+t.slice(5)].name:CH[t.slice(6)]}
function matches(i){if(S.filter=='all'||!i.tag)return true;if(i.tag==S.filter)return true;
 const fc=S.filter.startsWith('shop:')?shops[+S.filter.slice(5)].chain:S.filter.slice(6);return i.tag=='chain:'+fc}
function render(){
 const vis=S.items.filter(matches),done=vis.filter(i=>i.done).length,p=vis.length?Math.round(done/vis.length*100):0;
 $('fill').style.width=p+'%';$('pct').textContent=vis.length?`${p}% ✔  ${done}/${vis.length}`:'🛒';
 const sc=selChain();
 $('chips').innerHTML=`<button class="${S.filter=='all'?'on':''}" data-f="all" aria-label="Alle">🛒</button>`+Object.keys(CH).map(c=>`<button class="${sc==c?'on':''}" data-f="chain:${c}"><img src="logos/${c}.png" alt="${CH[c]}"></button>`).join('');
 const b=$('branch');b.hidden=!sc;
 if(sc){b.innerHTML=`<option value="chain:${sc}">⭐ ${CH[sc]} – alle</option>`+shops.map((s,k)=>[s,k]).filter(([s])=>s.chain==sc).sort((x,y)=>x[0].approx_km_from_as-y[0].approx_km_from_as).map(([s,k])=>`<option value="shop:${k}">📍 ${s.name} · ${s.approx_km_from_as} km</option>`).join('');b.value=S.filter}
 const row=i=>`<div class="item ${i.done?'done':''}" data-id="${i.id}"><div class="tick" role="checkbox" aria-checked="${i.done}">${i.done?'✔':''}</div><span style="font-size:30px">${icon(i.name)}</span><span class="name">${esc(i.name)}${i.note?` <small>${esc(i.note)}</small>`:''}</span>${i.tag?`<img src="${logoOf(i.tag)}" alt="${nameOf(i.tag)}">`:''}<button class="del" data-del="${i.id}" aria-label="Slett">🗑️</button></div>`;
 const L=layout();$('sortlbl').innerHTML=`↕ Sortert etter: <b>${esc(L.who)}</b>${L.mapped?'':' <i>(ikke kartlagt)</i>'}`;
 const groups=L.sections.map(s=>({s,its:[]})),other=[];vis.filter(i=>!i.done).forEach(i=>{const k=secOf(L,i.name);(k<0?other:groups[k].its).push(i)});
 let h='';groups.forEach(g=>{if(g.its.length)h+=`<div class="cat">${g.s.emoji||''} ${esc(g.s.name)}</div>`+g.its.map(row).join('')});
 if(other.length)h+=`<div class="cat">🛒 Annet</div>`+other.map(row).join('');
 const dn=vis.filter(i=>i.done);if(dn.length)h+=`<div class="cat">✔ ${dn.length}</div>`+dn.map(row).join('');
 $('list').innerHTML=h||'<div class="empty">🛒</div>';}
function shopId(k){return shops[k].url.split('/').pop()}
function layout(){let who='Standard',keys=['default'];
 if(S.filter!='all'&&shops.length){const c=selChain();if(S.filter.startsWith('shop:')){const k=+S.filter.slice(5);keys=[shopId(k),c,'default'];who=shops[k].name}else{keys=[c,'default'];who=CH[c]}}
 for(const k of keys)if(LAY[k]&&LAY[k].sections)return{...LAY[k],who,key:k};return{sections:[],mapped:false,who}}
function secOf(L,name){const n=norm(name),ws=n.split(/\s+/);
 for(let j=0;j<L.sections.length;j++)for(const k of (L.sections[j].keywords||[])){const kk=norm(k);if(n==kk||(kk.includes(' ')&&n.includes(kk))||ws.some(w=>kwHit(w,kk)))return j}
 const c=cat(name);return L.sections.findIndex(s=>(s.categories||[]).includes(c))}
function selChain(){if(S.filter=='all'||!shops.length)return null;return S.filter.startsWith('shop:')?shops[+S.filter.slice(5)].chain:S.filter.slice(6)}
$('branch').onchange=e=>{S.filter=e.target.value;save();render()};
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
function add(name,tag,note){name=name.trim();if(!name)return 0;const ex=S.items.find(i=>norm(i.name)==norm(name));if(ex){if(ex.done){ex.done=false;save();render()}return 0}
 name=name[0].toUpperCase()+name.slice(1);S.items.push({id:Date.now()+Math.random(),name,tag:tag||null,note:note||'',done:false});save();render();return 1}
function addText(t,tag){let n=0;split(t).forEach(x=>n+=add(x.name,tag,x.note));return n}
function find(n){n=norm(n);return S.items.find(i=>!i.done&&(norm(i.name)==n||norm(i.name).includes(n)||n.includes(norm(i.name))))}
$('chips').onclick=e=>{const b=e.target.closest('[data-f]');if(b){S.filter=b.dataset.f;save();render()}};
$('list').onclick=e=>{const d=e.target.closest('[data-del]');if(d){S.items=S.items.filter(i=>i.id!=d.dataset.del);save();return render()}
 const it=e.target.closest('.item');if(it){const i=S.items.find(x=>x.id==it.dataset.id);i.done=!i.done;save();render();if(navigator.vibrate)navigator.vibrate(30)}};
// add sheet: text + mic only; shop = current selection
const curTag=()=>S.filter=='all'?null:S.filter;
$('plus').onclick=()=>{$('txt').value='';const t=curTag();$('addto').innerHTML=t?`➜ <img src="${logoOf(t)}" alt=""> ${nameOf(t)}`:'';$('add').hidden=false;$('txt').focus()};
$('addf').onsubmit=e=>{e.preventDefault();const n=addText($('txt').value,curTag());toast('＋ '+n);$('add').hidden=true;$('txt').blur()};
$('cancel').onclick=()=>{$('add').hidden=true};
$('add').onclick=e=>{if(e.target.id=='add')$('add').hidden=true};
// voice
function toast(t){$('toast').textContent=t;$('toast').style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>$('toast').style.display='none',3500)}
function say(t,lang){toast(t);if(!speechSynthesis)return;const u=new SpeechSynthesisUtterance(t);u.lang=lang;speechSynthesis.cancel();speechSynthesis.speak(u)}
function left(lang){const l=S.items.filter(i=>!i.done&&matches(i)).map(i=>i.name);const nb=lang.startsWith('nb');
 if(!l.length)return nb?'Ferdig! Alt er handlet.':'All done! Everything is bought.';
 return(nb?'Igjen: ':'Still to get: ')+l.join(', ')}
function handle(t,lang){t=norm(t).replace(/[.!?]/g,'');let m;const nb=lang.startsWith('nb');
 if(m=t.match(/^(?:legg til|legge til|kjøp|add|put|buy)\s+(.+)$/)){const ns=m[1].split(/,| og | and /).map(s=>s.replace(/^(some|litt|en|et|ei)\s+/,'').trim()).filter(Boolean);ns.forEach(n=>add(n,curTag()));return say((nb?'La til ':'Added ')+ns.join(', ')+'. '+left(lang),lang)}
 if(m=t.match(/^(?:har|jeg har|i've got|i have got|i have|got|i got|done|ferdig med)\s+(?:(?:the|some|en|et|ei)\s+)?(.+?)(?:\s+(?:in|now|nå))?$/)){const ns=m[1].split(/,| og | and /).map(s=>s.replace(/^(the|some)\s+/,'').trim());const hit=[];
  ns.forEach(n=>{const i=find(n);if(i){i.done=true;hit.push(i.name)}});save();render();
  return say(hit.length?((nb?'Huket av ':'Ticked ')+hit.join(', ')+'. '+left(lang)):((nb?'Fant ikke ':'Could not find ')+m[1]),lang)}
 if(/igjen|mangler|what'?s left|left|remaining/.test(t))return say(left(lang),lang);
 say(nb?'Si: legg til melk, eller: har melk':'Say: add milk, or: I\'ve got milk',lang)}
const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
$('smic').onclick=()=>{if(!SR)return toast('🎤 ✖');const go=lang=>{const r=new SR();r.lang=lang;$('smic').classList.add('live');
 r.onresult=e=>{const t=e.results[0][0].transcript.replace(/^(legg til|add)\s+/i,'');$('txt').value=($('txt').value?$('txt').value+', ':'')+t};
 r.onerror=e=>{$('smic').classList.remove('live');if(e.error=='language-not-supported'&&lang=='nb-NO')go('en-GB')};r.onend=()=>$('smic').classList.remove('live');try{r.start()}catch(x){}};go('nb-NO')};
Promise.all(['shops.json','layouts.json'].map(f=>fetch(f+'?v='+Date.now(),{cache:'no-store'}).then(r=>r.json()))).then(([j,l])=>{shops=j.shops;LAY=l;render()}).catch(e=>toast('⚠ '+e.message));
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js',{updateViaCache:'none'});
