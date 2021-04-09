import React from "react";
import antiquesPhoto from "../../imgs/antiques.jpg";
import rightArrow from "../../imgs/right-arrow.png";

export default function Events() {
  const events = [
    {
      title: "Community Mentoring Program",
      description:
        "Research has long demonstrated that youth benefit from close, caring relationships with adults who serve as positive role models (Jekielek, Moore, & Hair, 2002). Today, 8.5 million youth continue to lack supportive, sustained relationships with caring adults (Cavell, DuBois, Karcher, Keller, & Rhodes, 2009). Mentoring—which matches youth or “mentees” with responsible, caring “mentors,” usually adults—has been growing in popularity as both a prevention and intervention strategy over the past decades. Mentoring provides youth with mentors who can develop an emotional bond with the mentee, have greater experience than the mentee, and can provide support, guidance, and opportunities to help youth succeed in life and meet their goals (DuBois and Karcher, 2005). Mentoring relationships can be formal or informal with substantial variation, but the essential components include creating caring, empathetic, consistent, and long-lasting relationships, often with some combination of role modeling, teaching, and advising.",
      location: ["TBA"],
      dates: "TBA",
    },
    {
      title: "Drug Take Back Boxes",
      description:
        "Remove the Risk- We have been charged to empower Fayette County residents to safely dispose of unused medications. This initiative is truly a partnership that requires changing the landscape of our community. We will be strategically placing boxes throughout the community with the support of the Connersville Police Department who has graciously agreed to pick up and dispose of all medications dropped in boxes.",
      location: [
        {
          name: "Fountain Place Apartments",
          address: "701 S Fountain St.",
          city: "Connersville",
          state: "IN",
          zip: "47331",
          phone: "765-825-8758",
        },
        {
          name: "Senior Center",
          address: "477 N Grand Ave.",
          city: "Connersville",
          state: "IN",
          zip: "47331",
          phone: "765-827-1511",
        },
      ],
      dates: "TBA",
    },
    {
      title: "Prime For Life Training",
      description:
        "Prime for Life- For most of us, prevention requires new ways of thinking about reducing risk or reducing the likelihood of problems. In general, we practice prevention once we understand there is a need for it. For example, to reduce the risk of mechanical problems with our cars/trucks, most of us change the oil, rotate tires, check fluid levels, etc. By offering Prime for Life, we hope to help our community learn effective ways to reduce risks and protect our health by learning how to prevent future problems… most importantly— how to protect the things we value most. We hope to offer this curriculum in as many venues as possible: In person, Facebook and via Zoom. Reach out and schedule a class for your team today!",
      location: ["TBA"],
      dates: "TBA",
    },
  ];
  return (
    <div
      className="events"
      style={{ backgroundImage: `url(${antiquesPhoto})` }}
    >
      <h3 className="eventsLabel yellowWrapper">events</h3>

      <div className="eventsHolder">
        {events.map((event) => {
          return (
            <div className="eventWrapper yellowWrapper">
              <h2>{event.title}</h2>
              <div className="button">
                Learn more
                <img className="rightArrow" src={rightArrow} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
