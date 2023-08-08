import React from 'react'
import Layout from '@/components/Layout';

import data from "@/components/utils";
import WorkItemsLayout from "@/components/section/WorkItemsLayout";

function Works() {
  return (
    <>
        <Layout>
            <div className='px-4 md:px-10 lg:px-32'>
                <h1 className='font-bold w-full pt-8 text-4xl text-white md:text-center'>{"Works & Projects"}</h1>
                <p className='text-xl py-4 text-gray-300 md:text-center'>{"Here is a list of the projects and collaborations I have been involved in over the past few years."}</p>
            </div>
        <WorkItemsLayout
            works = {data.works}
        />
        </Layout>
    </>
  )
}

export default Works