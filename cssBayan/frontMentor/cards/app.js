async function getDashboardData(url = './data.json') {
    const response = await fetch(url);
    const data = await response.json();
    return data
} 


class DashboardItem {
    static PERIODS = {
        daily: 'day',
        weekly: 'week',
        monthly: 'month'

    }

    constructor(data , container = '.dashboard__content', view = 'weekly') {
        this.data = data
        this.container = document.querySelector(container)
        this.view = view

        this.createMarkup();
    }

    createMarkup() {
        const {title, timeframes} = this.data
        const id = title.toLocaleLowerCase().replace(/ /g, '-')
        const {current, previous} = timeframes[this.view.toLocaleLowerCase()]

        this.container.insertAdjacentHTML('beforeend', `
            <div class="dashboard__item dashboard__item--${id}">
            <article class="tracking-card">
                <header class="tracking-card__header">
                    <h4 class="tracking-card__title">${title}</h4>
                    <img src="imgs/icon-ellipsis.svg" alt="menu" class="tracking-card__menu">
                </header>
                <div class="tracking-card__body">
                    <div class="tracking-card__time">
                        ${current}hrs
                    </div>
                    <div class="tracking-card__prev-period">
                        Last ${DashboardItem.PERIODS[this.view]} - ${previous}hrs
                    </div>
                </div>

            </article>
        </div>
        `)

        this.time = document.querySelector(`.dashboard__item--${id} .tracking-card__time`)
        this.prev = document.querySelector(`.dashboard__item--${id} .tracking-card__prev-period`)
    }

    chaneView(view) {
        this.view = view.toLocaleLowerCase()
        const {current, previous} = this.data.timeframes[this.view.toLocaleLowerCase()]

        this.time.innerText = `${current}hrs`
        this.prev.innerText =  `Last ${DashboardItem.PERIODS[this.view]} - ${previous}hrs`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getDashboardData()
    .then(data => {
        const activities = data.map(el => new DashboardItem(el))

        const selectors = document.querySelectorAll('.view-selector__item')
        debugger

        selectors.forEach(selector => 
            selector.addEventListener('click', function() {
            selectors.forEach(sel => sel.classList.remove('view-selector__item--active'))
            selector.classList.add('view-selector__item--active')

            const currentView = selector.innerText.trim().toLocaleLowerCase()

            activities.forEach(activitie => activitie.chaneView(currentView))
        }))
    })
})