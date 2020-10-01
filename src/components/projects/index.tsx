import * as React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './styles/index.css';
import { Footer } from '../footer';

export class Projects extends React.Component {
    render() {
        return (
            <div style={{height:"100%", paddingTop:"200px", backgroundColor:"#1d3750"}}>
                <h1 style={{color:"#fff", paddingBottom:"2rem"}}>Projects Timeline</h1>
                <VerticalTimeline className="projects-timeline">
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--work"
                        date="Ongoing"
                        dateClassName="project-date-right"
                        contentStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22, 24, 49)' }}
                        iconStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">MBALE COURT VIEW HOTEL</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mbale, Uganda</h4>
                        <p>
                        Supply, installation and commissioning of one (1) Fuji 8 passenger lift
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--work"
                        date="Ongoing"
                        dateClassName="project-date"
                        contentStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22, 24, 49)' }}
                        // date="2010 - 2011"
                        iconStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">HADJI SSEMPIJA APARTMENT</h3>
                        <h4 className="vertical-timeline-element-subtitle">Muyenga, Uganda</h4>
                        <p>
                        Supply, installation and commissioning of one (1) Fuji 8 passenger lift
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--work"
                        date="Ongoing"
                        dateClassName="project-date-right"
                        contentStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22, 24, 49)' }}
                        iconStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">SUNRISE MULTIPLE HOLDINGS</h3>
                        <h4 className="vertical-timeline-element-subtitle">Kamokya, Uganda</h4>
                        <p>
                        Supply, installation and commissioning of one (1) Fuji 21 passenger lift.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--work"
                        date="Ongoing"
                        dateClassName="project-date"
                        contentStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22, 24, 49)' }}
                        iconStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">UGANDA COMMUNICATIONS COMMISSION</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">Kampala, Uganda</h4> */}
                        <p>
                        Maintenance/service Two (2) Fuji lift passenger lifts each 8 persons
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Ongoing"
                        dateClassName="project-date-right"
                        contentStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(22, 24, 49)' }}
                        iconStyle={{ background: 'rgb(22, 24, 49)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">NATIONAL COUNCIL FOR HIGHER EDUCTAION</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">Location</h4> */}
                        <p>
                        Maintenance/service one (1) Fuji lift passenger lifts each 8 persons
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--education"
                        date="June 2020"
                        dateClassName="project-date"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">EUREKA PLACE HOTEL & SUITES</h3>
                        <h4 className="vertical-timeline-element-subtitle">Uganda</h4>
                        <p>
                        Supply, installation and commissioning of One (1) Fuji brand 8 passenger lift.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--education"
                        date="March 2020"
                        dateClassName="project-date-right2"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">JOY CHOUDHURY APARTMENTS</h3>
                        <h4 className="vertical-timeline-element-subtitle">Naguru</h4>
                        <p>
                        Supply, installation and commissioning of one (1) Fuji brand 4 passenger lift
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--education"
                        date="January 2020"
                        dateClassName="project-date"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">SUSNSHINE APARTMENTS</h3>
                        <h4 className="vertical-timeline-element-subtitle">Buziga, Uganda</h4>
                        <p>
                        Supply, installation and commissioning of two (2) Fuji brand 10 and 13 passenger panoramic lifts
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--education"
                        date="December 2019"
                        dateClassName="project-date-right2"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">OVAL PLAZA LTD</h3>
                        <h4 className="vertical-timeline-element-subtitle">Uganda</h4>
                        <p>
                        Supply, installation and commissioning of one (1) Fuji 8 passenger lift
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--education"
                        date="2018"
                        dateClassName="project-date"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">LAS VEGAS SUPERMARKET</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bbunga, Uganda</h4>
                        <p>
                        Supply, installation and commissioning of one (1) Fuji 4 passenger lift
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        // className="vertical-timeline-element--education"
                        date="2017"
                        dateClassName="project-date-right2"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">DR.ALEX BASHASHA RESIDENCE</h3>
                        <h4 className="vertical-timeline-element-subtitle">Buziga, Uganda</h4>
                        <p>
                        Supply, installation and commissioning of one (1) Fuji 4 passenger lift
                        </p>
                    </VerticalTimelineElement>
                <VerticalTimelineElement
                    dateClassName="project-date"
                    date="2017: Inception"
                    iconStyle={{ background: 'rgb(120, 0, 32)', color: '#fff' }}
                    // icon={<StarIcon />}
                />
                </VerticalTimeline>
                <Footer />
            </div>
        );
    }
}