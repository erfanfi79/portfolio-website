import React from 'react'
import InfoSection from './common/InfoSection';

const Education = ({id}) => {
    const infos = [
        {
          title: "B.E. in computer engineering",
          company: {
            name: "Sharif University of Technology",
            link: "https://www.sharif.edu/",
          },
          date: {
            start: "July 2021",
            end: "February 2022",
          },
          location: "Tehran",
        },
        {
          title: "High School Diploma",
          company: {
            name: "National Organization for Development of Exceptional Talents",
            link: "https://torob.com/",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Sampad.svg",
          },
          date: {
            start: "July 2021",
            end: "February 2022",
          },
          location: "Tehran",
        },
      ];
      return (
        <div id={id}>
          <div className="m-3 pt-2">
            <div className="text-center text-blue-900 text-2xl font-bold">
              Education
            </div>
            {infos.map((item, index) => (
              <InfoSection info={item} key={index}/>
            ))}
          </div>
          <div className="w-full h-px border border-neutral-400"></div>
        </div>
      );
}

export default Education