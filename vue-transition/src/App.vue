<template>
  <transition :name="transitionName" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' : function(to, from) {
      const indexFrom = from.meta.index
      const indexTo = to.meta.index
      this.transitionName = ''
      if(indexFrom < indexTo) {
        this.transitionName = 'slide-right'
      } else if( indexFrom > indexTo) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = ''
      }
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

/* push */
.slide-right-leave-active {
  transition: all 0.1s;
}
.slide-right-leave {
  transform: translateX(0);
}
.slide-right-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter-active {
  transition: all 0.3s;
}
.slide-right-enter {
  transform: translateX(100%);
}
.slide-right-enter-to {
  transform: translateX(0);
}



/* back */
.slide-left-leave-active {
  transition: all 0.1s;
}
.slide-left-leave {
  transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-left-enter-active {
  transition: all 0.3s;
}
.slide-left-enter {
  transform: translateX(-100%);
}
.slide-left-enter-to {
  transform: translateX(0);
}
</style>
