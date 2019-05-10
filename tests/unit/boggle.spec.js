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

        expect(1).equals(2);
    });

    it('covertTo2D should take a list and covert it to 2d array', () => {
        expect(1).equals(2);
    });

    it('coverCharToNumber should change a char to a number for calculation purpose', () => {
        expect(1).equals(2);
    });

    it('findWord should find possible words', () => {
        expect(1).equals(2);
    });

});
