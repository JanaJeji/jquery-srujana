class Index {
    constructor(query) {
        this.domElem = document.querySelector(query);
    }
    addHtml(innerHTML) {
        this.domElem.innerHTML = innerHTML;
        return this;
    }
    show() {
        this.domElem.style.removeProperty("display");
        return this;
    }
    hide() {
        this.domElem.style.setProperty("display", "none");
        return this;
    }
    removeClass(className) {
        this.domElem.classList.remove(className);
        return this;
    }
    submit(eventType, cb) {
        this.domElem.addEventListener(eventType, cb);
        return this;
    }
}
const $$ = (query) => {
    return new Index(query);
};

$$.ajax = (request) => {
    const { url, data, success } = request;

    if (data !== undefined) {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(success);
    } else {
        fetch(url)
            .then((res) => res.json())
            .then(success);
    }
};