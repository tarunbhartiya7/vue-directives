import Vue from 'vue'

Vue.directive('purple', function(el) {
    el.style.color = 'purple'
})

Vue.directive('color', function(el, binding) {
    el.style.color = binding.value || 'green'
})

Vue.directive('click-outside', {
    bind(el, binding) {
        el.__clickOutsideHandler = e => {
            if (e.target === el || el.contains(e.target)) {
                alert('you clicked inside')
            } else {
                binding.value(e)    // passing e is optional its the $event
            }
        }
        document.body.addEventListener('click', el.__clickOutsideHandler)
    },
    unbind(el) {
        document.body.removeEventListener('click', el.__clickOutsideHandler)
    }
})

Vue.directive('switching-colors', {
    bind: function(el, binding) {
        const colors = binding.value
        const speed = {
            slow: 2000,
            normal: 1000,
            fast: 500,
            crazy: 100
        }
        const speedName = binding.arg || 'normal'
        let i = 0
        let callback = function(){
            el.style.color = colors[i++]
            if (binding.modifiers.underline) el.style.textDecoration = 'underline'
            if (binding.modifiers.uppercase) el.style.textTransform = 'uppercase'
            if (i >= colors.length) i = 0
        }
        callback()  // called first time on load and then using interval
        el.__switchingInterval = setInterval(callback, speed[speedName])
    },
    unbind:function(el) {
        clearInterval(el.__switchingInterval)
    }
})