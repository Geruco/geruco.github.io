window.addEventListener("load",function(){
    var contenu1Btn = document.getElementById("stageContenu1");
    contenu1Btn.addEventListener("click", function() {
        var subtitleStage1 = document.getElementById("subtitleStage1");
        subtitleStage1.innerHTML="Contenu du stage :";
        var para = document.getElementById("pStage1");
        para.innerHTML = "Durant le stage de 5 semaines effectués chez Pixel Et Cicéro, le projet accompli était la création d'un tchat.<br /> Pour ce faire, j'ai commencé par connecter une interface client écrite en JavaScript à un serveur WebSocket écrit en Python. <br />Ensuite, j'ai ajouté une option permettant de synchroniser les localStorages de tout les utilisateurs. <br />Puis est arrivé le moment de la sécurisation. J'ai ainsi utilisé Keycloak, un outil permettant une sécurisation par authentification simplement.<br />J'ai donc du connecter Keycloak à la fois à l'interface clien et au serveur, et faire en sorte que le serveur ne réponde qu'aux utilisateurs authentifiés.";
        var download = document.createElement("a");
        download.setAttribute("href","assets/dl/projet1.zip");
        download.setAttribute("download","Projet1");
        download.innerHTML = "<br/>Télécharger le projet.";
        para.appendChild(download);
        
        
        
    })
    var entreprise1Btn = document.getElementById("stageEntreprise1");
    entreprise1Btn.addEventListener("click", function() {
        var subtitleStage1 = document.getElementById("subtitleStage1");
        subtitleStage1.innerHTML="L\'entreprise :";
        var para = document.getElementById("pStage1");
        para.innerHTML = "Pixel Et Cicéro est un studio de création spécialisé en communication numérique et papier. Cette société est située à Argonay et est mise en place en 2016.<br/>L\'entreprise est actuellement en cours de développement d\'un logiciel de création et de partage de fichiers numériques.";
        
    })
    
    
    var contenu2Btn = document.getElementById("stageContenu2");
    contenu2Btn.addEventListener("click", function() {
        var subtitleStage2 = document.getElementById("subtitleStage2");
        subtitleStage2.innerHTML="Contenu du stage :";
        var para = document.getElementById("pStage2");
        para.innerHTML = "Durant la deuxième année du BTS, j'ai été embauché en stage continu afin de créer des sites webs où toutes les pages sont gérées en javascript. C'est à dire un seul fichier html, et tout les \"liens\" sont en réalité reliés à des fonctions permettant de gérer le contenu de la page internet. <p><br/>Ce procédé est plus lourd au chargement de la page, mais il permet une plus grande fluidité une fois chargée. Je suis ainsi en train de créer un site pour l'entreprise CODIPLAS, puis je m'attelerai à la création du site de l'entreprise BIOLIGO.</p>";
                
        
    })
    var entreprise2Btn = document.getElementById("stageEntreprise2");
    entreprise2Btn.addEventListener("click", function() {
        var subtitleStage2 = document.getElementById("subtitleStage2");
        subtitleStage2.innerHTML="L\'entreprise :";
        var para = document.getElementById("pStage2");
        para.innerHTML = "Pixel Et Cicéro est un studio de création spécialisé en communication numérique et papier. Cette société est située à Argonay et est mise en place en 2016.<br/>L\'entreprise est actuellement en cours de développement d\'un logiciel de création et de partage de fichiers numériques.";
        
    })
    
    
})