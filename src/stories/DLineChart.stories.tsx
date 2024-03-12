import type { Meta } from '@storybook/react';
import React from 'react';
import DLineChart from "C:/Navya/NavyaPrograms/intern/demp - Copy/src/DLineChart.js"

export default{
    title: "DLineChart",
    component: DLineChart,
}

const Template = args => <DLineChart {...args}/>

export const Chart = Template.bind({})
Chart.args = {
   label: "Data Usage Chart",

}