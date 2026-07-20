const MusicaSite = new Audio('./audiozin-cortado.mp3');
MusicaSite.loop = true; 

function ativarAudio() {
    MusicaSite.play()
        .then(() => {
            console.log("Música iniciada com sucesso!");
            document.removeEventListener('click', ativarAudio);
            document.removeEventListener('touchstart', removeAtivarAudio);
        })
        .catch((error) => {
            console.error("Erro ao tocar a música:", error);
        });
}

function removeAtivarAudio() {
    ativarAudio();
}

document.addEventListener('click', ativarAudio);
document.addEventListener('touchstart', removeAtivarAudio);