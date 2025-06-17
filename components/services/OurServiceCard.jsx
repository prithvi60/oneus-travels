import React from 'react'
import { OtherBtn } from '../Button'

const OurServiceCard = ({ data }) => {
    return (
        <>
            {data.map((item, id) => (
                <div key={id} className="w-full h-auto space-y-6 md:space-y-8 mx-auto sm:max-w-[620px] md:max-w-[720px] lg:max-w-[940px] -mt-5 px-7 lg:px-0 !pb-12 sm:!pb-16 xl:!pb-20 text-secondary">
                    <h2 className="text-2xl font-bold tracking-normal capitalize font-Gilroy text-secondary md:text-3xl xl:text-4xl">
                        {item.mainTitle}
                    </h2>

                    <h2 className="text-lg font-semibold tracking-normal capitalize font-Poppins text-secondary md:text-xl xl:text-2xl">
                        {item.sub}
                    </h2>
                    <p className="text-base font-normal font-Poppins">
                        {item.desc}
                    </p>
                    <div className="text-base font-normal font-Poppins space-y-1">
                        <h3>{item.listTitle}</h3>
                        <ul className='list-disc list-outside ml-4 space-y-1'>
                            {item.lists.map((list, idx) => (
                                <li key={idx}>{list}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-base font-normal font-Poppins">
                        {item.para1}
                    </p>
                    <OtherBtn roleType={"button"} text={item.hrefName} />
                    {item.para2 && (
                        <p className="text-base font-normal font-Poppins">
                            {item.para2}
                        </p>
                    )}
                </div>
            ))}
        </>
    )
}

export default OurServiceCard