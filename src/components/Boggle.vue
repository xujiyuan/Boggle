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
                boggleData:'',
                vowels: ['a', 'e', 'i', 'o', 'u'],
                badGuy: 'y'
            }
        },
        methods: {
            playBoggleGame() {
                let stringToArray = this.parseInput(this.boggleData);
                const matrix = this.covertTo2D(stringToArray);
                console.log(matrix[0]);
                console.log(matrix[1]);
            },
            test() {
                return 'test';
            },

            /*
                All the functions below should be put in a service
            */
            findWord() {
                return 1;
            },
            /*
                Provide a 1-d array, covert it to 2d
             */
            covertTo2D(list) {
                let result = [];
                for (let i = 0; i < list.length; i++) {
                    if (list[i].length > 0) { // prevent extra new lines
                        result[i] = list[i].split('');
                    }
                }
                return result;
                },
            /*
                Given a \n separated string, covert it to a 1-d list
             */
            parseInput(inputString) {
                return inputString.split(/\r?\n/);
            },
            /*
                Given a char, return the value associated
             */
            coverCharToNumber() {
                return 1;
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
