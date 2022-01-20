<template>
  <div id="app">
    <v-app>
      <div id="holder">
        <div>
          <p id="name">רמי</p>
        </div>
        <div>
          <p id="status">{{ status }}</p>
        </div>
        <div>
          <p id="office">במשרד</p>
        </div>
      </div>
      <vs-switch
        id="toggle"
        v-model="inOffice"
        color="#da4d77"
        @change="toggleStatus"
      >
        <template #off>דווקא לא </template>
        <template #on> דווקא כן </template>
      </vs-switch>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      status: "לא",
      inOffice: true,
    };
  },
  async created() {
    await this.initStatus();
    this.initInOffice();
  },
  methods: {
    async initStatus() {
      const data = await fetch("http://localhost:3000/status");
      const a = await data.json();
      console.log("status is " + JSON.stringify(a));
      this.status = a.status;
    },
    async toggleStatus() {
      console.log("Change status");
      let newS = "לא";
      if (this.status === "לא") {
        newS = "כן";
      }
      await fetch(`http://localhost:3000/status/${newS}`, { method: "POST" });
      await this.initStatus();
    },
    initInOffice() {
      this.inOffice = this.status === "לא";
    },
  },
  // watch: {
  //   inOffice: {
  //     immediate: false,
  //     handler() {
  //       this.toggleStatus();
  //     },
  //   },
  // },
};
</script>

<style>
@import url("https://fonts.google.com/specimen/Heebo?subset=hebrew");

body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: "Heebo";
  min-height: 100vh;
}

.v-application {
  font-family: "Heebo" !important;
}

.v-application--wrap {
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #554ab0;
  color: #c1b9ff;
}

p {
  margin: 0px !important;
  padding: 0px !important;
}

#status {
  font-size: 20vh;
  line-height: 0.9;
  font-weight: bold;
  color: #eca4b8;
  text-shadow: 0 1px 0 #d84c76, 0 2px 0 #d84c76, 0 3px 0 #d84c76,
    0 4px 0 #d84c76, 0 5px 0 #d84c76, 0 6px 0 #d84c76, 0 7px 0 #d84c76,
    0 8px 0 #d84c76, 0 9px 0 #d84c76, 0 10px 0 #d84c76, 0 11px 0 #d84c76,
    0 12px 0 #d84c76, 0 20px 30px rgba(0, 0, 0, 0.5);
}

#name {
  font-size: 5vh;
}

#office {
  font-size: 5vh;
  margin-top: 3vh !important;
}

#holder {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.vs-switch__text {
  font-size: 2vh;
}

.vs-switch__circle {
  background-color: #eca4b8;
}

.off {
  color: #d84c76;
  font-weight: bold;
}

.on {
  font-weight: bold;
}

#toggle {
  position: absolute;
  bottom: 10vh;
  transform: scale(1.5);
}
</style>
