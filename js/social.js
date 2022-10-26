var newWindow;

document.querySelector("#youtube").addEventListener("click", (e) => {
    newWindow = "https://www.youtube.com/channel/UCn_zp5Wsau0zM_6VG_KSDFQ";
    window.open(newWindow, "youtubeWindow");
    e.preventDefault();
})

document.querySelector("#twitter").addEventListener("click", (e) => {
    newWindow = "https://twitter.com/aptducksNFT";
    window.open(newWindow, "twitterWindow");
    e.preventDefault();
});

document.querySelector("#discord").addEventListener("click", (e) => {
    newWindow = "https://discord.gg/aptducks";
    window.open(newWindow, "discordWindow");
    e.preventDefault();
});