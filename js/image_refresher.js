import { app } from "../../scripts/app.js";

app.registerExtension({
  name: "ComfyUI-Fooocus-Inpaint-Wrapper.image_refresher",
  async setup() {
    // Crea un img HTML e aggiungilo in UI
    const img = document.createElement("img");
    img.id = "tuonodo_img";
    img.style.maxWidth = "100%";
    img.style.display = "block";
    img.style.margin = "60px 0px auto auto";
    img.style.zIndex = "999999";
    document.body.appendChild(img);

    // Funzione per aggiornare src ogni 5 secondi
    const updateImage = () => {
      const timestamp = Date.now();
      img.src = `/extensions/ComfyUI-Fooocus-Inpaint-Wrapper/image.png?cb=${timestamp}`;
    };

    updateImage(); // primo load
    setInterval(updateImage, 5000);
  }
});
