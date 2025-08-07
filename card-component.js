class RepresentativeCard {
  constructor({
    title = "REPRESENTATIVE",
    photo,
    flag,
    name,
    role,
    company,
    companyLogo,
    skills,
    progressPercent,
  }) {
    this.data = {
      title,
      photo,
      flag,
      name,
      role,
      company,
      companyLogo,
      skills,
      progressPercent,
    };

    this.element = this.createCard();
  }

  createCard() {
    const main = document.createElement("div");
    main.classList.add("main");

    main.innerHTML = `
            <div class="title">
            <img class="medal-icon" src="img/medal_icon.png" alt="medal icon"/>
            <span>${this.data.title}</span>
        </div>
        <div class="card">
            <div class="content">
                <div class="photo">
                    <div class="personal-photo">
                        <img class="avatar" src="${this.data.photo}" alt="${this.data.name} photo"/>
                        <img class="country-flag" src="${this.data.flag}" alt="country flag">
                    </div>
                </div>
                <div class="personal-info">
                    <div class="main-personal-info">
                        <div class="info">
                            <span class="name">${this.data.name}</span>
                            <span class="role">${this.data.role}</span>
                            <span class="role">${this.data.company}</span>
                        </div>
                        <div class="gri-logo">
                            <img class="gri-logo-img" src="${this.data.companyLogo}" alt="${this.data.company} logo">
                        </div>
                    </div>
                    <div class="description">
                        <span class="skills">${this.data.skills}</span>
                        <img class="star-icon" src="img/estrela.png" alt="star">
                    </div>
                </div>
            </div>
            <div class="main-progress-bar">
                <div class="progress-bar">
                    <div class="bar" style="width:${this.data.progressPercent}%"></div>
                </div>
                <div class="text">
                    <span class="text-progress">${this.data.progressPercent}%</span>
                    <span class="text-progress-bar">Match</span>
                </div>
            </div>
            <div class="buttons">
                <button class="btn">Intro request</button>
                <button class="btn">Private meeting</button>
                <button class="btn-chat">
                    <img class="chat-icon" src="img/chat-icon.png" alt="chat-icon"/>Chat
                </button>
            </div>
        </div>
        `;

    return main;
  }

  updateProgress(newPercent) {
    const bar = this.element.querySelector(".bar");
    const textProgress = this.element.querySelector(".text-progress");

    let current = this.data.progressPercent;
    const step = newPercent > current ? 1 : -1;
    const interval = setInterval(() => {
      current += step;
      bar.style.width = `${current}%`;
      textProgress.textContent = `${current}%`;

      if (current === newPercent) {
        clearInterval(interval);
        this.data.progressPercent = newPercent;
      }
    }, 50);
  }

  updateName(newName) {
    this.data.name = newName;
    this.element.querySelector(".name").textContent = newName;
  }

  appendTo(container) {
    container.appendChild(this.element);
  }
}
