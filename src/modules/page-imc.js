import { LitElement,css,html } from "lit";

export class imc extends LitElement{

    static styles = css`
    .input-wrapper{
        background-color: #eee;
        border: none;
        padding: 1rem;
        font-size: 1rem;
        width: 13em;
        border-radius: 1rem;
        color: lightcoral;
        box-shadow: 0 0.4rem #dfd9d9;
        cursor: pointer;
      }
      
      .input-wrapper:focus {
        outline-color: blue;
      }
    `

    connectedCallback() {
        super.connectedCallback();
        this.imc = 0;
    }

    render(){
        return html`
        <div>
            <div class="inputs">
                <input class="input-wrapper" type="number" id="peso" placeholder="peso en kilogramos">
                <input class="input-wrapper" type="number" id="altura" placeholder="altura en metros">
                <button @click="${() => this.imcFuntion()}">Calcular</button>
                <div style="margin:1em;" id="result"></div>
            </div>
            <img style="display:none" id="1" src="https://media.lmneuquen.com/p/ac6d5ef4aadd2e8b2a35837c6d6abc5a/adjuntos/195/imagenes/003/123/0003123682/p23-f1-cyvsce_id217694jpg.jpg" alt="imc">
            <img style="display:none" id="2" src="https://www.my-personaltrainer.it/2021/02/24/allenamento-delle-braccia_900x760.jpeg" alt="imc">
            <img style="display:none" id="3" src="https://s2.abcstatics.com/Media/201504/13/barriga-demencia--644x362.jpg" alt="imc">
            <img style="display:none" id="4" src="https://www.centrocirugialaparoscopica.com/wp-content/uploads/2021/06/Obesidad-y-cirugia-bariatrica-872x500.jpg" alt="imc">
            <img style="display:none" id="5" src="https://nationaltoday.com/wp-content/uploads/2022/10/40-Nikocado-Avocado-1200x834.jpg" alt="imc">
        </div>
        `
    }

    imcFuntion(){
        const inputs = this.shadowRoot.querySelectorAll("input");
        
        inputs.forEach(input => {
            if (input.id === "peso"){
                this.peso = input.value;

            } else {
                this.altura = input.value;
            }
        });

        const images = this.shadowRoot.querySelectorAll("img");
        const result = this.shadowRoot.getElementById("result");
        this.imc = ((this.peso)/((this.altura)*(this.altura)))

        images.forEach(image => {
            image.style = "display:none"
            if ((this.imc <= 24.9) && (this.imc >= 18.5)){
                if (image.id === "1"){
                    image.style = "display:flex"
                    result.innerHTML = "Su resultado es: Bajo peso"
                } 
            } else if ((this.imc <= 29.9) && (this.imc >= 25)){
                if (image.id === "2"){
                    image.style = "display:flex"
                    result.innerHTML = "Su resultado es: Normal"

                }   
            } else if ((this.imc <= 34.9) && (this.imc >= 30)){
                if (image.id === "3"){
                    image.style = "display:flex"
                    result.innerHTML = "Su resultado es: Sobrepeso"

                }   
            } else if ((this.imc <= 39.9) && (this.imc >= 35)){
                if (image.id === "4"){
                    image.style = "display:flex"
                    result.innerHTML = "Su resultado es: Obesidad"

                } 
            } else if (this.imc >= 40){
                if (image.id === "5"){
                    image.style = "display:flex"
                    result.innerHTML = "Su resultado es: Obesidad Mordica"

                }   
            }
        });
        this.requestUpdate()

    }


}

customElements.define('page-imc', imc);