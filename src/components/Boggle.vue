<template>
    <div>
        <h2>"Bad Boggle"</h2>
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
            <div>Word: {{maxWord}}, score: {{maxSum}}</div>
            <input id="mazeEntrySubmit" type="submit" value="Process">
            <div id="mazeSolution"></div>
        </form>
        <p>Beta 0.0.1 release 5/10/2019 10:55am est by Jimmy Xu</p>
    </div>

</template>
<script>
    export default {
        name: 'Boggle',
        data() {
            return {
                boggleData: '',
                vowels: ['a', 'e', 'i', 'o', 'u'],
                badGuy: 'y',
                M: 0,
                N: 0,
                maxSum: 0,
                maxWord: 'n/a'
            }
        },
        methods: {
            playBoggleGame(e) {
                e.preventDefault();

                // TODO: add validation to the user input, no time for this

                let stringToArray = this.parseInput(this.boggleData);
                const matrix = this.convertTo2D(stringToArray);

                // start traverse the matrix to look for all suitable words for comparison
                this.M = matrix.length;
                this.N = matrix[0].length;

                let visited = Array(this.M).fill(false).map(() => Array(this.N).fill(false));

                for (let i = 0; i < this.M; i++) { //TODO: need tested
                    for (let j = 0; j < this.N; j++) {
                        this.findWord(matrix, visited, i, j, '');
                    }
                }
            },
            test() {
                return 'test';
            },

            /*
                All the functions below should be put in a service
            */
            findWord(matrix, visited, i, j, word) {
                visited[i][j] = true;
                word = word + matrix[i][j];

                for (let row = i - 1; row <= i + 1 && row < this.M; row++) {
                    for (let col = j - 1; col <= j + 1 && col < this.N; col++) {
                        if (row >= 0
                            && col >= 0
                            && !visited[row][col]
                            && (i === row || j === col) //This line will make it only traverse on cardinal direction
                            && (this.vowels.includes(word.charAt(0))) // we do not want to consider Y situation, This is based on assumption that there is always a vowel char
                            && this.calculateStringValue(word) > 0 //This is also based on assumption that there is always a vowel char
                            && (word.toLowerCase().indexOf('y') < 0 || (word.toLowerCase().indexOf('y') > 0 && this.calculateStringValue(word.substring(0, word.toLowerCase().indexOf('y'))) > 10))
                        ) {
                            // We need to handle special cases for y to improve performance
                            // case 1: 3,3,3,-10,3,3,3,3 the highest score should be entire string. we include -10 which means continue search
                            // case 2: 3,3,-10,3,3,3,3,3 the highest is on the right side of -10, do not include -10, stop search
                            this.findWord(matrix, visited, row, col, word);
                        }
                    }
                }

                let score = this.calculateStringValue(word);
                if (this.maxSum < score) {
                    this.maxSum = score;
                    this.maxWord = word;
                }
                word = word.slice(-1);
                visited[i][j] = false;
            },
            /*
                Provide a 1-d array, covert it to 2d
             */
            convertTo2D(list) {
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
            convertCharToNumber(char) {
                if (char.toLowerCase() === this.badGuy) {
                    return -10;
                } else if (this.vowels.includes(char.toLowerCase())) {
                    return 3;
                } else {
                    return -2;
                }
            },
            calculateStringValue(string) {
                return [0, ...string].reduce((sum, char) =>
                    sum + this.convertCharToNumber(char)
                )
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
