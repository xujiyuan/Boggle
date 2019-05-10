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
                boggleData: '',
                vowels: ['a', 'e', 'i', 'o', 'u'],
                badGuy: 'y',
                M: 0,
                N: 0,
                maxSum: 0,
                maxWord: ''
            }
        },
        methods: {
            playBoggleGame() {
                let stringToArray = this.parseInput(this.boggleData);
                const matrix = this.convertTo2D(stringToArray);
                console.log(matrix[0]);
                console.log(matrix[1]);

                // start traverse the matrix to look for all suitable words for comparison
                this.M = matrix.length;
                this.N = matrix[0].length;

                // for(let i=0; i<matrix.length; i++){ //TODO: need tested
                //     for (let j=0; j<matrix[i].length; j++){
                //         matrix[i][j] = this.coverCharToNumber(matrix[i][j]);
                //     }
                // }

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
                        //console.log('i,j', i, j);

                        if (row >= 0
                            && col >= 0
                            && !visited[row][col]
                            && (this.vowels.includes(word.charAt(0)))
                        ) {
                            // console.log('location', row, col);
                            this.findWord(matrix, visited, row, col, word);
                        }
                    }
                }
                console.log('word is', word);
                word = word.slice(-1);
                console.log('word after is', word);

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
                return [0,...string].reduce((sum, char) =>
                    sum + this.coverCharToNumber(char)
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
