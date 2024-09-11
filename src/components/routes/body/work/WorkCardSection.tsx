import WorkCard from "./WorkCard"

const workList = [
    {
        title: "Couple's Guidance",
        description: "Autem quibusdam et aut officiis debitis aut rerum necessi.",
        price: 90.00,
        duration: "45 MIN",
        img: "/work4.jpg"
    },
    {
        title: "Discovery Session",
        description: "Lorem ipsum dolor sit amet, elit necessi tatibus saepe..",
        price: 80.00,
        duration: "35 MIN",
        img: "/work2.jpg"
    },
    {
        title: "Self Employment",
        description: "Officiis debitis aut rerum necessi tatibus saepe.",
        price: 50,
        duration: "35 MIN",
        img: "/work3.jpg"
    },
    {
        title: "Couple's Guidance",
        description: "Aut rerum necessi autem aut officiis tatibus saepe.",
        price: 70,
        duration: "35 MIN",
        img: "/work1.jpg"
    },
]

const WorkCardSection = () => {
  return (
    <div className="grid grid-cols-4 gap-5 px-4 md:px-10 lg:px-28">
    {
        workList.map(work => (
            <WorkCard work={work} key={work.title} />
        ))
    }
    </div>
  )
}

export default WorkCardSection
