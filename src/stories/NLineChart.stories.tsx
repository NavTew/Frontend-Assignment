import type { Meta } from '@storybook/react';
import React from 'react';
import NLineChart from "C:/Navya/NavyaPrograms/intern/demp - Copy/src/NLineChart.js"

export default{
    title: "NLineChart",
    component: NLineChart,
}

const Template = args => <NLineChart {...args}/>

export const Chart = Template.bind({})
Chart.args = {
   label: "Network Usage Chart",

}