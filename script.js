*{
box-sizing:border-box;
font-family:Arial,sans-serif;
}


body{

margin:0;

background:
radial-gradient(circle at top,#123544,#070b14 55%);

color:white;

min-height:100vh;

}



/* LOGIN */


.login-container{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

}



.login-box{

width:380px;

padding:45px;

background:
linear-gradient(145deg,#111827,#070b14);

border-radius:30px;

text-align:center;

border:1px solid rgba(77,237,255,.25);

box-shadow:
0 20px 60px rgba(0,0,0,.5);

}



.logo{

font-size:60px;

}



.login-box h1{

color:#4DEDFF;

font-size:32px;

margin-bottom:10px;

}



.login-box p{

color:#aaa;

}



button{

background:#4DEDFF;

color:#070b14;

border:0;

padding:14px 25px;

border-radius:12px;

font-weight:bold;

cursor:pointer;

transition:.3s;

}



button:hover{

transform:scale(1.05);

box-shadow:
0 0 25px #4DEDFF;

}




/* GENERAL */


.hidden{

display:none;

}



header{

padding:30px;

text-align:center;

border-bottom:

1px solid rgba(77,237,255,.15);

}



header h1{

color:#4DEDFF;

margin:0;

font-size:40px;

}




/* PERFIL */


.profile{

max-width:1000px;

margin:50px auto 20px;

padding:35px;

background:

linear-gradient(145deg,#111827,#070b14);

border-radius:30px;

display:flex;

align-items:center;

gap:35px;

flex-wrap:wrap;

border:

1px solid rgba(77,237,255,.2);

box-shadow:

0 20px 50px rgba(0,0,0,.4);

}



.profile img{

width:150px;

height:150px;

border-radius:50%;

border:4px solid #4DEDFF;

box-shadow:

0 0 30px rgba(77,237,255,.5);

}



.profile h2{

font-size:35px;

margin:0 0 15px;

color:#4DEDFF;

}



#rol{

background:#4DEDFF;

color:#070b14;

padding:8px 20px;

border-radius:30px;

font-weight:bold;

display:inline-block;

}





/* TARJETAS */


.cards{

max-width:1000px;

margin:30px auto;

display:grid;

grid-template-columns:

repeat(auto-fit,minmax(250px,1fr));

gap:25px;

}



.card{

background:#111827;

padding:30px;

border-radius:25px;

border:

1px solid rgba(77,237,255,.15);

transition:.3s;

}



.card:hover{

transform:translateY(-8px);

border-color:#4DEDFF;

box-shadow:

0 15px 35px rgba(77,237,255,.25);

}



.card h3{

color:#4DEDFF;

}



.card select{

width:100%;

padding:12px;

border-radius:10px;

margin-top:10px;

}





/* OWNER */


.owner{

max-width:1000px;

margin:40px auto;

padding:35px;

background:

linear-gradient(145deg,#101827,#05080f);

border-radius:30px;

border:

2px solid #4DEDFF;

box-shadow:

0 0 40px rgba(77,237,255,.25);

}



.owner h2{

color:#4DEDFF;

}



.owner input{

width:100%;

padding:14px;

border-radius:10px;

border:0;

margin:15px 0;

}



.edit{

margin-top:30px;

display:grid;

gap:15px;

}



.edit label{

color:#aaa;

}



.edit select{

padding:12px;

border-radius:10px;

}




.save{

margin-top:20px;

width:100%;

}





footer{

text-align:center;

padding:30px;

color:#777;

}