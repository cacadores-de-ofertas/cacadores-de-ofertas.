const ofertas=[
{titulo:'Smartphone 35% OFF',texto:'Oferta relâmpago por tempo limitado.'},
{titulo:'Notebook em Promoção',texto:'Excelente custo-benefício.'},
{titulo:'Fone Bluetooth',texto:'Preço especial para hoje.'}
];

const area=document.getElementById('offers');
ofertas.forEach(o=>{
 const div=document.createElement('div');
 div.className='card';
 div.innerHTML=`<h3>${o.titulo}</h3><p>${o.texto}</p>`;
 area.appendChild(div);
});

document.getElementById('themeBtn').onclick=()=>{
 document.body.classList.toggle('dark');
};
