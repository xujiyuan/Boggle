import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Boggle from '@/components/Boggle.vue';

describe('HelloWorld.vue', () => {

  it('test method is called', () => {
    const wrapper = shallowMount(Boggle);
    const result = wrapper.vm.test();
    expect(result).equals('test');
  });

});
