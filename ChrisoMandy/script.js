    //Header hide button
    document.addEventListener("DOMContentLoaded", function() {
        let e = document.querySelector("header"),
            t = document.querySelector("#updown");
        t.addEventListener("click", function() {
            e.classList.contains("hidden") ? (e.classList.remove("hidden"), t.innerHTML = '<i class="fa-solid fa-arrow-up"></i>') : (e.classList.add("hidden"), t.innerHTML = '<i class="fa-solid fa-arrow-down"></i>')
        })
    }),

    //Language exchange code
    document.addEventListener("DOMContentLoaded", function() {
        let e = document.querySelector("#language-toggle"),
            t = document.querySelector("#listlanguages"),
            a = document.querySelectorAll(".language-option");
    
        function r(e) {
            localStorage.setItem("language", e), a.forEach(e => {
                e.style.backgroundColor = ""
            });
            let r = document.querySelector(`.language-option[data-lang="${e}"]`);
            r && (r.style.backgroundColor = "#C86BB7"), "en" === e ? (
            document.body.setAttribute("lang", "en"), document.querySelector("#li1").innerHTML = `<span id="staricon" class="star">✦</span> Home`, 
            document.querySelector("#li2").innerHTML = `<span id="staricon2" class="star">✦</span> About`, 
            document.querySelector("#li3").innerHTML = `<span id="staricon3" class="star">✦</span> Prices`, 
            document.querySelector("#li4").innerHTML = `<span id="staricon4" class="star">✦</span> Projects`, 
            
            
            
            document.querySelector(".textprice").innerHTML = `<span class="linetext">Background addition:</span> +5% to 10% of the total value depending on the complexity <br> <span class="linetext">Character addition:</span> +50% of the total value per each character added` ,
            document.querySelector("#markingline1").innerHTML = `<p class="textodaheadline"><span>Head:</span> Sketch <span>$20</span> | Full Render <span>$100</span></p>
              <hr class="headline">`,
              document.querySelector("#markingline2").innerHTML = `<p class="textodaheadline"><span>Half Body:</span> Sketch <span>$50</span> | Full Render <span>$150</span></p>
              <hr class="headline">`,
              document.querySelector("#markingline3").innerHTML = `<p class="textodaheadline"><span>Full Body:</span> Sketch <span>$80</span> | Full Render <span>$200</span></p>
              <hr class="headline">`, 


            document.querySelector("#charactertitle").textContent = "Character Sheet",
            document.querySelector("#titlespan1").textContent = "Includes:",
            document.querySelector("#titlespan2").innerHTML = `Starting at <br> US$ 300` ,
            
            document.querySelector(".textprice2").innerHTML = `  <span class="ministar">✦</span><span class="linetext">At least</span> two full body illustrations of the character in dynamic poses showing front and back or clothing variations. (More full body illustrations and/or another details can be added, but a 10% fee will be charged for every addition.) <br>
            <span class="ministar">✦</span>Colored backgorund based on the character’s personality and/or color palette. <br>
            <span  class="ministar">✦</span>Color palette and/or aesthetics/references for the character creation. <br>
            <span class="ministar">✦</span>Any information you’d like to add about the character. (Name, age, profession, personality, status, curiosities, etc.)   `,



            document.querySelector("#title1").textContent = "-About the Artist:", 
            document.querySelector("#text1").textContent = "Hi!! My name is Amanda!!!", 
            document.querySelector("#text2").textContent = `I am a brazilian artist who has a passion for drawing and studying art since 10 years old, but I actually only started working professionally in the digital illustration field with 18.
            My style consists in a mix between japanese pop culture, such as manga and anime that were my first influences, Art Nouveau and Baroque art. These influences not only appear in the lines but also in the color palette and shading method. `, 
            document.querySelector("#title2").textContent = "Tools", 
            document.querySelector("#text3").innerHTML = `<span class="star">✦</span> Notebook Asus Aspire 3`, 
            document.querySelector("#text4").innerHTML = `<span class="star">✦</span> Pen Display XP Pen Artist 12 Pro`, 
            document.querySelector("#text5").innerHTML = `<span class="star">✦</span> Softwares: Paint Tool Sai 2 and Clip Studio Paint`, 
            document.querySelector("#title3").textContent = "-Terms of Service:", 
            document.querySelector("#text6").innerHTML = `<span class="star">✦</span> You, as the customer: Has all the rights related to the illustration you commissioned, being able to post it on your social media as long as you give credit to the artist who produced it. You're also entitled to cancel your commission whenever you like, for whatever reason, having the right to receive reembursement of all you already payed for.`, document.querySelector("#text7").innerHTML = `<span  class="star">✦</span> Me, as the artist: I reserv myself the right to exhibit the illustration in my social media as an example of my work, giving the rightful credits to the owner of the character or idea. I'll also be entitled to cancel or even refuse to produce a illustration for whatever reason that comes, offering reembursement of all you already payed for.`, 
            document.querySelector("#text8").innerHTML = `<span  class="star">✦</span> It's EXTRICTLY FORBIDDEN to sell my commissioned works without a previously signed contract stating the contrary.`, 
            document.querySelector("#text9").innerHTML = `<span  class="star">✦</span> I WILL NOT DRAW: explicit NSFW content, non artistic nudes, nothing that hurts the Human Rights, direct or indirectly.`, document.querySelector("#comictitle1").innerHTML = "Magical Tales for Little Witches", document.querySelector("#comictext1").innerHTML = "This comic anthology is born from the passion of five artists for the world of magic and fantasy. In this book, you follow the everyday lives of little witches as they navigate their daily challenges. Some must deal with school and learn how unique their magic truly is, calm their minds to successfully cast that long-desired spell, or face the expectations of their parents regarding their future as witches.", document.querySelector("#comictitle2").innerHTML = "The Witch and the Future", 
            document.querySelector("#comictext2").innerHTML = `This is the story of Yasmim, a young magic student facing the tough decision of opening up to her mother about her future. She has realized that she doesn’t fit into the profession her entire family practices and wants to pursue a different path. Now, she must gather the courage to express her desire for what she truly wants to do with the rest of her life.`, document.querySelector("#mobiletopic1").innerHTML = "Home", document.querySelector("#mobiletopic2").innerHTML = "About", document.querySelector("#mobiletopic3").innerHTML = "Prices", document.querySelector("#mobiletopic4").innerHTML = "Projects"): "pt" === e && (document.body.setAttribute("lang", "pt"), 
            

            document.querySelector("#li1").innerHTML = `<span id="staricon" class="star">✦</span> In\xedcio`, document.querySelector("#li2").innerHTML = `<span id="staricon2" class="star">✦</span> Sobre`, document.querySelector("#li3").innerHTML = `<span id="staricon3" class="star">✦</span> Pre\xe7os`, document.querySelector("#li4").innerHTML = `<span id="staricon4" class="star">✦</span> Projetos`, 
            
            
            document.querySelector(".textprice").innerHTML = `<span class="linetext">Adição de fundo:</span> de 5% à 10% do valor total dependendo da complexidade. <br> <span class="linetext">Adição de personagem:</span> 50% do valor total por cada personagem adicionado.`, document.querySelector("#markingline1").innerHTML = `<p class="textodaheadline"><span>Cabeça:</span> Sketch <span>R$80</span> | Render <span>R$150</span></p>
            <hr class="headline">`,
            document.querySelector("#markingline2").innerHTML = `<p class="textodaheadline"><span>Meio Corpo:</span> Sketch <span>R$120</span> | Render <span>R$225</span></p>
            <hr class="headline">`,
            document.querySelector("#markingline3").innerHTML = `<p class="textodaheadline"><span>Corpo Inteiro:</span> Sketch <span>R$180</span> | Render <span>R$300</span></p>
            <hr class="headline">`,
            
            document.querySelector("#charactertitle").textContent = "Ficha de Personagem",
            document.querySelector("#titlespan1").textContent = "Inclui:",
            document.querySelector("#titlespan2").innerHTML = `Á partir de
<br>R$400` ,

            document.querySelector(".textprice2").innerHTML = `<span class="ministar">✦</span><span class="linetext">No mínimo</span> duas ilustrações de corpo inteiro do personagem em poses dinâmicas mostrando frente e costas ou variações de roupas. (Mais ilustrações de corpo inteiro e/ou de detalhes do personagem podem ser adicionadas, porém isso acrescentará uma taxa de 10% do valor total para cada item adicionado.) <br>
            <span class="ministar">✦</span>Fundo colorido baseado na personalidade do personagem e na sua paleta de cores. <br>
            <span  class="ministar">✦</span>Paleta de cores e/ou referências de criação do personagem. <br>
            <span class="ministar">✦</span>Informações à sua escolha sobre o personagem. (Nome, idade, profissão, personalidade, status, curiosidades e etc.) `,
            

            document.querySelector("#title1").textContent = "-Sobre a Artista:", document.querySelector("#text1").textContent = `Ol\xe1!! Meu nome \xe9 Amanda!!!`, document.querySelector("#text2").textContent = `Sou uma artista brasileira que desenha e estuda arte desde os 10 anos de idade, mas trabalho de forma profissional com arte digital desde os 18.
            Meu estilo consiste em um misto entre a cultura pop japonesa, tal como mang\xe1s e animes que foram as primeiras influ\xeancias que tive, Art Nouveau e Arte Barroca. Essas influ\xeancias n\xe3o s\xf3 transparecem no tra\xe7o como na coloriza\xe7\xe3o das obras.`, 
            document.querySelector("#title2").textContent = "Ferramentas", 
            document.querySelector("#text3").innerHTML = `<span class="star">✦</span> Notebook Asus Aspire 3`, 
            document.querySelector("#text4").innerHTML = `<span class="star">✦</span> Display interativo XP Pen Artist 12 Pro`, 
            document.querySelector("#text5").innerHTML = `<span class="star">✦</span> Softwares: Paint Tool Sai 2 e Clip Studio Paint`, 
            document.querySelector("#title3").textContent = `-Termos de Servi\xe7o:`, 
            document.querySelector("#text6").innerHTML = `<span class="star">✦</span> Voc\xea, enquanto consumidor: Tem direito em rela\xe7\xe3o \xe0 obra que encomendou, podendo exibi-la em suas redes sociais dando os devidos cr\xe9ditos \xe0 artista pela produ\xe7\xe3o da mesma. Tamb\xe9m poder\xe1 cancelar a comiss\xe3o quando quiser, tendo direito \xe0 reembolso da quantia que j\xe1 pagou.`, 
            document.querySelector("#text7").innerHTML = `<span class="star">✦</span> Eu, enquanto artista: Me reservo ao direito de exibir a obra em minhas redes sociais como um exemplar do meu trabalho dando os devidos cr\xe9ditos ao dono do personagem ou da ideia. Tamb\xe9m poderei cancelar ou mesmo me recusar a produzir uma ilustra\xe7\xe3o por quaisquer motivos, oferecendo reembolso da quantia que j\xe1 foi paga.`, document.querySelector("#text8").innerHTML = `<span class="star">✦</span> \xc9 EXPRESSAMENTE PROIBIDO comercializar meus trabalhos comissionados sem contrato assinado previamente que lhe garanta esse direito.`, document.querySelector("#text9").innerHTML = `<span class="star">✦</span> N\xc3O DESENHAREI: nada contendo cenas nsfw explicitas, nudes n\xe3o art\xedsticos, nada que desrespeite os Direitos Humanos direta ou indiretamente.`, document.querySelector("#comictitle1").innerHTML = `Historietas M\xe1gicas para Pequenas Bruxas`, document.querySelector("#comictext1").innerHTML = `Este quadrinho \xe9 uma antologia criada da paix\xe3o de 5 artistas pelo mundo da magia e fantasia. Neste livro, voc\xea acompanha a vida cotidiana de algumas pequenas bruxas tendo de enfrentar o dia-a-dia. Algumas delas precisam lidar com a escola e compreender o qu\xe3o \xfanica \xe9 sua magia, acalmar sua mente para executar aquele feiti\xe7o t\xe3o desejado ou lidar com as expectativas dos pais sobre seu futuro como bruxa.`, document.querySelector("#comictitle2").innerHTML = "A Bruxa e o Futuro", document.querySelector("#comictext2").innerHTML = `Essa \xe9 a hist\xf3ria de Yasmim, uma jovem estudante de magia que enfrenta a dura decis\xe3o de ter que se abrir com sua m\xe3e sobre seu futuro. Ela descobriu que n\xe3o se encaixa na profiss\xe3o que a fam\xedlia inteira pratica e que quer seguir um outro caminho, ent\xe3o ter\xe1 que juntar coragem para verbalizar o seu desejo sobre o que quer fazer para o resto da vida.`, document.querySelector("#mobiletopic1").innerHTML = `In\xedcio`, document.querySelector("#mobiletopic2").innerHTML = "Sobre", document.querySelector("#mobiletopic3").innerHTML = `Pre\xe7os`, document.querySelector("#mobiletopic4").innerHTML = "Projetos"), t.style.display = "none", [{
                li: "li1",
                icon: "staricon"
            }, {
                li: "li2",
                icon: "staricon2"
            }, {
                li: "li3",
                icon: "staricon3"
            }, {
                li: "li4",
                icon: "staricon4"
            }, {
                li: "li5",
                icon: "staricon5"
            }].forEach(({
                li: e,
                icon: t
            }) => {
                let a = document.getElementById(e),
                    r = document.getElementById(t);
                a.addEventListener("mouseover", () => {
                    r.classList.add("staricon"), r.classList.remove("star")
                }), a.addEventListener("mouseout", () => {
                    r.classList.remove("staricon"), r.classList.add("star")
                })
            })
        }
        e.addEventListener("click", function() {
            t.style.display = "block" === t.style.display ? "none" : "block"
        }), a.forEach(e => {
            e.addEventListener("click", function() {
                let e = this.getAttribute("data-lang");
                r(e), window.location.reload()
            })
        });
        let s = localStorage.getItem("language") || "en";
        r(s)
    }), 
    
    //Scroll animation
    document.addEventListener("DOMContentLoaded", () => {
        let e = document.querySelectorAll("#about, .text, #projects, .divprice, .textprice, .textprice2, #markingline1, #markingline2, #markingline3, .comics");
        if (e.length > 0) {
            let t = new IntersectionObserver(e => {
                e.forEach(e => {
                    e.isIntersecting ? (e.target.classList.add("animate"), e.target.classList.remove("animate-out")) : (e.target.classList.add("animate-out"), e.target.classList.remove("animate"))
                })
            }, {
                threshold: .1000
            });
            e.forEach(e => t.observe(e))
        }
    }), 
    
    //Slider Code
    document.addEventListener("DOMContentLoaded", () => {
        let e = document.querySelector(".main-slider .slides"),
            t = document.querySelector(".main-slider .prev"),
            a = document.querySelector(".main-slider .next"),
            r = document.querySelector(".main-slider .fullscreen"),
            s = document.querySelector(".main-slider .indicators"),
            i = document.querySelector(".main-slider"),
            o = 0,
            n = images.length;
    
        function c(t) {
            let a = e.clientWidth;
            e.style.transform = `translateX(-${t*a}px)`, o = t;
            let r = document.querySelectorAll(".indicator");
            r.forEach((e, t) => {
                e.classList.toggle("active", t === o)
            })
        }
    
        function l() {
            document.fullscreenElement ? document.exitFullscreen().then(() => {
                i.classList.remove("fullscreen-active"), d()
            }).catch(e => console.error(`Erro ao sair de tela cheia: ${e}`)) : i.requestFullscreen().then(() => {
                i.classList.add("fullscreen-active"), d()
            }).catch(e => console.error(`Erro ao entrar em tela cheia: ${e}`))
        }
    
        function d() {
            c(o)
        }
        t.addEventListener("click", () => {
            c(o = (o - 1 + n) % n)
        }), a.addEventListener("click", () => {
            c(o = (o + 1) % n)
        }), r.addEventListener("click", l), images.forEach((t, a) => {
            let r = document.createElement("div");
            r.classList.add("slide"), r.style.backgroundImage = `url(${t.src})`, e.appendChild(r);
            let i = document.createElement("div");
            i.classList.add("indicator"), 0 === a && i.classList.add("active"), s.appendChild(i), i.addEventListener("click", () => {
                c(a)
            })
        }), window.addEventListener("resize", () => {
            d()
        }), c(o)
    });

    // Adding images via JS to the slider
    const images = [ {
        src:"https://i.im.ge/2025/02/28/HpkMKJ.imagem-2025-02-26-144814837.webp",
        alt:""
    },
        {
            src: "https://i.im.ge/2025/01/14/z4GpKa.Saga.webp",
            alt: "Saga"
        },  {
            src: "https://i.im.ge/2025/01/14/z4GVAc.Malenia.webp",
            alt: "Malenia"
        }, {
            src: "https://i.im.ge/2025/01/14/z4GbZf.Eren-BW.webp",
            alt: "Eren-BW"
        }, 
        {
            src: "https://i.im.ge/2025/01/14/z4Gz1G.Power-Chainsaw-Man-1.webp",
            alt: "Image 7"
        }, {
            src: "https://i.im.ge/2025/01/14/z4G8ir.E-U-L-A-2.webp",
            alt: "Image 8"
        }, {
            src: "https://i.im.ge/2025/01/14/z4GK7T.Mahoumon-Deviantart.webp",
            alt: "Image 9"
        }, {
            src: "https://i.im.ge/2025/01/14/z4GWG0.Kirbo.webp",
            alt: "Image 10"
        }, {
            src: "https://i.im.ge/2025/01/14/z4Gniy.The-Warframe-Founder-2.webp",
            alt: "Image 13"
        },
        {
            src: "https://i.im.ge/2025/01/14/z4GJXJ.SpideyPool-Zine-Piece.webp",
            alt: "Image 16"
        }, ],

    // Header configuration for small screens and cover animation
    covers = document.getElementsByClassName("cover"),
    divcovers = document.getElementsByClassName("divcover");
    function isSmallScreen() {
        return window.innerWidth >= 1025
    }
    function clearEvents() {
        for (let e = 1; e < divcovers.length; e++) {
            let t = divcovers[e].cloneNode(!0);
            divcovers[e].replaceWith(t), divcovers[e] = t
        }
    }
    function configureEvents() {
        if (clearEvents(), isSmallScreen())
            for (let e = 1; e < divcovers.length; e++) divcovers[e].addEventListener("mouseover", () => {
                covers[e].classList.add("animacover")
            }), divcovers[e].addEventListener("mouseout", () => {
                covers[e].classList.remove("animacover")
            });
        else
            for (let t = 1; t < divcovers.length; t++) divcovers[t].addEventListener("click", () => {
                covers[t].classList.toggle("animacover")
            })
    }
    configureEvents(), window.addEventListener("resize", configureEvents);
    const hamburger = document.getElementById("hamburger"),
    mobiletopics = document.querySelector(".mobiletopics");
        hamburger.addEventListener("click", () => {
        mobiletopics.classList.toggle("active")
    }), document.addEventListener("DOMContentLoaded", function() {
        setTimeout(() => {
            let e = document.querySelector(".topics");
            e && e.scrollIntoView({
                behavior: "instant",
                block: "start"
            })
        }, 200)
    });

    //Stars Animation
    const STAR_COLOR = '#fff';
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 40;
    const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 20;
   
    const canvas = document.querySelector( 'canvas' ),
        context = canvas.getContext( '2d' );
   
        let scale = 1,
        width,
        height;
   
        let stars = [];
   
        let pointerX,
        pointerY;
   
        let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.003 };
   
        let touchInput = false;
   
        generate();
        resize();
        step();
   
        canvas.onmousemove = onMouseMove;
        document.onmouseleave = onMouseLeave;
   
        function generate() {
   
        for( let i = 0; i < STAR_COUNT; i++ ) {
        stars.push({
            x: 0,
            y: 0,
            z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )
        });
        }
   
        }
   
        function placeStar( star ) {
   
        star.x = Math.random() * width;
        star.y = Math.random() * height;
   
        }
   
        function recycleStar( star ) {
   
        let direction = 'z';
        let vx = Math.abs( velocity.x ),
            vy = Math.abs( velocity.y );
        if( vx > 1 || vy > 1 ) {
        let axis;
        if( vx > vy ) {
        axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';        
        }
        else {
        axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
        }
        if( axis === 'h' ) {
        direction = velocity.x > 0 ? 'l' : 'r';
        }
        else {
        direction = velocity.y > 0 ? 't' : 'b';
        }
        }
        
        star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );
   
        if( direction === 'z' ) {
            star.z = 0.1;
            star.x = Math.random() * width;
            star.y = Math.random() * height;
        }
        else if( direction === 'l' ) {
            star.x = -OVERFLOW_THRESHOLD;
            star.y = height * Math.random();
        }
        else if( direction === 'r' ) {
            star.x = width + OVERFLOW_THRESHOLD;
            star.y = height * Math.random();
        }
        else if( direction === 't' ) {
            star.x = width * Math.random();
            star.y = -OVERFLOW_THRESHOLD;
        }
        else if( direction === 'b' ) {
            star.x = width * Math.random();
            star.y = height + OVERFLOW_THRESHOLD;
        }
   
        }
   
        function resize() {
   
               scale = window.devicePixelRatio || 1;
   
               width = window.innerWidth * scale;
               height = window.innerHeight * scale;
   
               canvas.width = width;
               canvas.height = height;
   
               stars.forEach( placeStar );
   
        }
   
        function step() {
   
               context.clearRect( 0, 0, width, height );
   
               update();
               render();
   
               requestAnimationFrame( step );
   
        }
   
        function update() {
   
               velocity.tx *= 0.96;
               velocity.ty *= 0.96;
   
               velocity.x += ( velocity.tx - velocity.x ) * 0.8;
               velocity.y += ( velocity.ty - velocity.y ) * 0.8;
   
               stars.forEach( ( star ) => {
   
                   star.x += velocity.x * star.z;
                   star.y += velocity.y * star.z;
   
                   star.x += ( star.x - width/2 ) * velocity.z * star.z;
                   star.y += ( star.y - height/2 ) * velocity.z * star.z;
                   star.z += velocity.z;
   
                   // recycle when out of bounds
                   if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
                       recycleStar( star );
                   }
   
               } );
   
        }
   
        function render() {
   
               stars.forEach( ( star ) => {
   
                   context.beginPath();
                   context.lineCap = 'round';
                   context.lineWidth = STAR_SIZE * star.z * scale;
                   context.globalAlpha = 0.5 + 0.5*Math.random();
                   context.strokeStyle = STAR_COLOR;
   
                   context.beginPath();
                   context.moveTo( star.x, star.y );
   
                   var tailX = velocity.x * 2,
                       tailY = velocity.y * 2;
   
                   // stroke() wont work on an invisible line
                   if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
                   if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;
   
                   context.lineTo( star.x + tailX, star.y + tailY );
   
                   context.stroke();
   
               } );
   
        }
   
        function movePointer( x, y ) {
   
               if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {
   
                   let ox = x - pointerX,
                       oy = y - pointerY;
   
                   velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
                   velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );
   
               }
   
               pointerX = x;
               pointerY = y;
   
        }
   
        function onMouseMove( event ) {

            touchInput = false;
            movePointer(event.clientX, event.clientY);
        }
           
        

        