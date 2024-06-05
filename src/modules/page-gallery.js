class ImageGallery extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      this.images = ['https://static1.srcdn.com/wordpress/wp-content/uploads/2018/06/X-Men-Havok-Comic-Art-Scream.jpg',
      
        'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VNLOPVBDM5AATCOW2VHOCMYQHA.jpg',

        'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/x-men-s-cyclops-with-intriguing-blurred-costume-behind.jpg',
        
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/rogue-xmen.jpg',
        
        'https://i.pinimg.com/736x/15/7c/0a/157c0a34a52aa8e6ab6afe852ee7af57.jpg',
        
        'https://img.redbull.com/images/c_crop,x_363,y_0,h_407,w_325/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/02/11/87f8642d-126d-4219-acc9-12ca261bfe39/wolverine',
        
        'https://i.pinimg.com/originals/3d/4d/1f/3d4d1ffca3b972a9cd43fff96399e601.jpg',
        
        'https://upload.wikimedia.org/wikipedia/en/0/03/Iceman.png',
        
        'https://i.pinimg.com/736x/38/e0/90/38e090d55e951ac38853430d6b39691a.jpg',
        
        'https://media.thenerdstash.com/wp-content/uploads/2023/11/Nightcrawler-2-1024x576.jpg',
        
        'https://hips.hearstapps.com/hmg-prod/images/magento-1568362613.jpg',
        
        'https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7823917-marauders2019019_cov-scaled.jpg',
    ] 
  
  
      this.shadowRoot.innerHTML = `
        <style>
          .gallery { display: flex; flex-wrap: wrap; background-color: black;}
          .thumbnail { width: 100px; margin: 5px; cursor: pointer; }
          .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); justify-content: center; align-items: center; }
          .modal img { max-width: 90%; max-height: 90%; }
          .hero {width:48%; margin:1em;}
          #prev, #next{ margin:2em; font-size: 1em; padding:1em 2em;}
        </style>
        <div class="gallery"></div>
        <div class="modal"> 
            <button id="prev">Previous</button>
            <img id="modal-image" />
            <button id="next">Next</button>
            <button style="position:absolute; right:2em; top: 2em;" id="cerrar">cerrar</button>
        </div>

      `;
  
      this.currentImageIndex = 0;
    }
  
    connectedCallback() {
      const gallery = this.shadowRoot.querySelector('.gallery');
      this.images.forEach((index, image) => {
        const img = document.createElement('img');
        img.className = "hero"
        img.src = `${this.images[image]}`
        gallery.appendChild(img);

        img.addEventListener('click', () => this.openModal(image));
      });
  
      this.shadowRoot.getElementById('prev').addEventListener('click', () => this.navigate(-1));
      this.shadowRoot.getElementById('next').addEventListener('click', () => this.navigate(1));
      this.shadowRoot.getElementById('cerrar').addEventListener('click', () => this.closeModal());
    }
  
    openModal(image) {
      this.currentImageIndex = image;
      console.log(this.currentImageIndex)
      this.shadowRoot.querySelector('.modal').style.display = 'flex';
      this.updateModalImage();
    }
  
    closeModal() {
      this.shadowRoot.querySelector('.modal').style.display = 'none';
    }
  
    navigate(direction) {
      this.currentImageIndex = (this.currentImageIndex + direction + this.images.length) % this.images.length;
      this.updateModalImage();
    }
  
    updateModalImage() {
      this.shadowRoot.getElementById('modal-image').src = this.images[this.currentImageIndex];
    }
  }
  
  customElements.define('image-gallery', ImageGallery);