<template>
    <div>
        <h2>"Bad Boggle" Instructions</h2>
        <pre>
      Example Input:
      urbx
      oygj
      fuya

      Example Output:
      Word: "uofu", Score: 7
    </pre>

        <form id="mazeForm" @submit="playBoggleGame">
            <label for="mazeEntry">Please input your grid and click "Process"</label><br/>
            <textarea v-model="boggleData" name="mazeEntry" id="mazeEntry" cols="30" rows="10"></textarea>
            <br/>
            <input id="mazeEntrySubmit" type="submit" value="Process">
            <div id="mazeSolution"></div>
        </form>
    </div>

</template>
<script>
    export default {
        name: 'Boggle',
        data() {
            return {
                boggleData:''
            }
        },
        methods: {
            playBoggleGame() {
              console.log(this.boggleData);
            },
            test() {
                return 'test';
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

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
</style>
