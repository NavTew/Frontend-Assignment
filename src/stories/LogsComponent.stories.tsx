import type { Meta } from '@storybook/react';
import React from 'react';
import LogsComponent from "C:/Navya/NavyaPrograms/intern/demp - Copy/src/LogsComponent"

export default{
    title: "LogsComponent",
    component: LogsComponent,
}

const Template = args => <LogsComponent {...args}/>

export const Chart = Template.bind({})
Chart.args = {
   label: "Logs Component",

}