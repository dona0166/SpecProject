<template>
   
  <div id="graphs" class="chart">
  <figure class="chart__content">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -25 440 125">
     
      <path class="chart__path" :d="`M${path}`"
        fill="none" stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <text class="chart__content" v-for="text in $root.checkedNames">
    {{text}}
     </text>
     
      <text v-for="([ x, y ]) in path" :x="x - 10" :y="y - 7.5"
        font-size="10" font-weight="200" fill="currentColor">
        {{ 100 - (y | 0) + '%' }}
      </text>
    </svg>
  </figure>
       
</div>    

</template>

<script>
  export default {
    name: 'graphs',
    data() {
    return {
      points: { a: 10, b: 20, c: 35, d: 60, e: 96 }
      }
  },
  
  computed: {
    path() {
      return Object.keys(this.points)
        // we need to filter the array to remove any
        // properties TweenLite has added
        .filter(key => ~'abcde'.indexOf(key))
        // calculate X coordinate for 5 points evenly spread
        // then reverse the data-point, a higher % should
        // move up but Y coordinates increase downwards
        .map((key, i) => [i * 100, 100 - this.points[key]])
        
    }
  },
  
  methods: {/*
    // our randomly generated destination values
    // could be replaced by an array.unshift process
    /*setPoint(key) {
      let duration = this.random(3, 5)
      let destination = this.random(0, 100)
      this.animatePoint({ key, duration, destination })
    },
    // start the tween on this given object key and call setPoint
    // once complete to start over again, passing back the key
    animatePoint({ key, duration, destination }) {
      TweenLite.to(this.points, duration, {
        [key]: destination,
        ease: Sine.easeInOut,
        onComplete: this.setPoint,
        onCompleteParams: [key]
      })
    },
    random(min, max) {
      return ((Math.random() * (max - min)) + min).toFixed(2)
    }*/
  },
  
  // finally, trigger the whole process when ready
  mounted() {
    Object.keys(this.points).forEach(key => {
      this.setPoint(key)
    })
  }
    }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  @import "https://fonts.googleapis.com/css?family=Lato:300,900|Libre+Franklin:100,200,300,600,900|Prompt:100,200,300,600,900";
.chart {
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #36424b;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.chart__content {
  width: 95%;
  max-width: 775px;
  padding-right: 1.5rem;
  position: relative;
}
.chart__content::before, .chart__content::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
}
.chart__content::before {
  width: 100%;
  height: 1px;
  background: black;
}
.chart__content::after {
  width: 1px;
  height: 100%;
background: black;  
}
.chart__content svg {
  display: block;
}
.chart__caption {
  left: 50%;
  top: 100%;
  width: 100%;
  position: absolute;
  text-align: center;
}
.chart__title {
  font-size: 1.3rem;
}
.chart__subtitle {
  font-size: 1.15rem;
  margin-top: 0.5em;
}

</style>
