// alert("it works");

document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
        open: false,

        toggle() {
            this.open = ! this.open
        },
    }))

    Alpine.store('curUser', {
        items: ["Hello World!", "Hello Alpine!"]
       
      })
})