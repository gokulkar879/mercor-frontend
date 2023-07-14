import people12 from "./assets/images/Ellipse 12.svg";
import people13 from "./assets/images/Ellipse 13.svg";
import people14 from "./assets/images/Ellipse 14.svg";
import people15 from "./assets/images/Ellipse 15.svg";
import image1 from "./assets/images/Image1.png";
import image2 from "./assets/images/Image2.png";
import image3 from "./assets/images/Image3.png";

export default {
    ToDo: [
        {
            severity: "Low",
            title: "Brainstorming",
            description: "Brainstorming brings team members' diverse experience into play. ",
            peoples: [
                {
                    avatar: people14,
                    _id: 43
                },
                {
                    avatar: people13,
                    _id: 44
                },
                {
                    avatar: people12,
                    _id: 45
                }
            ],
            img: "",
            id: "1",
            comments: 3,
            files: 0,
        },
        {
            severity: "High",
            title: "Research",
            description: "User research helps you to create an optimal product for users.",
            peoples: [
                {
                    avatar: people15,
                    _id: 99
                },
                {
                    avatar: people14,
                    _id: 45
                }
            ],
            img: "",
            id: "2",
            comments: 7,
            files: 0,
        },
        {
            severity: "High",
            title: "Wireframes",
            description: "Low fidelity wireframes include the most basic content and visuals.",
            peoples: [
                {
                    avatar: people12,
                    _id: 23
                }
            ],
            img: "",
            id: "3",
            comments: 0,
            files: 0,
        }
    ],
    OnProgress: [
        {
            severity: "Low",
            title: "Onboarding Illustrations ",
            description: "",
            peoples: [
                {
                    avatar: people15,
                    _id: 56
                }
            ],
            img: image2,
            id: "4",
            comments: 4,
            files: 1,
        },
        {
            severity: "Low",
            title: "Moodboard",
            description: "",
            peoples: [
                {
                    avatar: people14,
                    _id: 96
                },
                {
                    avatar: people13,
                    _id: 69
                }
            ],
            img: image1,
            id: "5",
            comments: 12,
            files: 1,
        }
    ],
    Done: [
        {
            severity: "",
            title: "Mobile App Design",
            description: "",
            peoples: [
                {
                    avatar: people14,
                    _id: 345
                },
                {
                    avatar: people12,
                    _id: 399
                }
            ],
            img: image3,
            id: "7",
            comments: 10,
            files: 1,
        },
        {
            severity: "",
            title: "Design System",
            description: "It just needs to adapt the UI from what you did before ",
            peoples: [
                {
                    avatar: people14,
                    _id: 444
                }
            ],
            img: "",
            id: "8",
            comments: 3,
            files: 0,
        }
    ]
}