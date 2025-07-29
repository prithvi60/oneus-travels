import React from 'react'
import { OtherBtn } from '../Button'

const OurServiceCard = ({ data }) => {
    return (
        <>
            {data.map((item, id) => (
                <div key={id} className="space-y-5">
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
                    <OtherBtn roleType={"button"} text={item.hrefName} href={item.href} />
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