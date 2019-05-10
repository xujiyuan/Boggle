import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Boggle from '@/components/Boggle.vue';

describe('Boggle.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Boggle);
    });

    it('test method is called', () => {
        const result = wrapper.vm.test();
        expect(result).equals('test');
    });

    it('parseInput should covert string into 1D list', () => {
        const result = wrapper.vm.parseInput('ab\ncd\nef');
        expect(result.length).equals(3);
        expect(result[0]).equals('ab');
        expect(result[1]).equals('cd');
        expect(result[2]).equals('ef');
    });

    it('covertTo2D should take a list and covert it to 2d array', () => {
        const result = wrapper.vm.covertTo2D(['AB','CD', 'EF']);
        expect(result[0][0]).equals('A');
        expect(result[0][1]).equals('B');
        expect(result[2][1]).equals('F');
    });

    it('covertTo2D should filter out empty string from input', () => {
        const result = wrapper.vm.covertTo2D(['AB','CD', 'EF', '']);
        // console.log(result);
        expect(result.length).equals(3);
        expect(result[0][0]).equals('A');
    });


    it('coverCharToNumber should change a char to a number for calculation purpose', () => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let result;
        vowels.forEach(char => {
            result = wrapper.vm.coverCharToNumber(char);
            expect(result).equals(3);
        });

        result = wrapper.vm.coverCharToNumber('y');
        expect(result).equals(-10);

        result = wrapper.vm.coverCharToNumber('Y');
        expect(result).equals(-10);

        result = wrapper.vm.coverCharToNumber('g');
        expect(result).equals(-2);

        expect(1).equals(2);
    });

    it('findWord should find possible words', () => {
        expect(1).equals(2);
    });

});
