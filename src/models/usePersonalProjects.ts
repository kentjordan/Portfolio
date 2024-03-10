import { useState } from "react";
import MDASCalculator from "@/assets/mdas_calculator.png";
import Kabhsahi1 from "@/assets/kabsahi1.png";
import Kabhsahi2 from "@/assets/kabsahi2.png";
import Kabhsahi3 from "@/assets/kabsahi3.png";
import Kabhsahi4 from "@/assets/kabsahi4.png";
import Kabhsahi5 from "@/assets/kabsahi5.png";
import Kabhsahi6 from "@/assets/kabsahi6.png";
import BinarySearch from "@/assets/binary_search.png";
import LinearSearch from "@/assets/linear_search.png";
import { WorkItem } from "@/types/works";

const usePersonalProjects = () => {

    const [personalProjects, setPersonalProjects] = useState<WorkItem[]>([
        {
            id: "PP-001",
            title: "Kabsahi Cart",
            description: "A Cart System for an eCommerce supposedly for Kabsahi.",
            img_url: [
                Kabhsahi1,
                Kabhsahi2,
                Kabhsahi3,
                Kabhsahi4,
                Kabhsahi5,
                Kabhsahi6,
            ],
            view_url: "https://kabsahi-devlopment.vercel.app/",
            isOnDevelopment: false,
            tags: ["REACT.JS"],
        },
        {
            id: "PP-002",
            title: "Calculator",
            description: "An MDAS calculator based on flutter web.",
            img_url: [MDASCalculator],
            view_url: "https://calc-kjordan.vercel.app/",
            isOnDevelopment: false,
            tags: ["FLUTTER WEB"],
        },
        {
            id: "PP-003",
            title: "Binary Search Visualizer",
            description: "To visualize the binary search algorithm.",
            img_url: [BinarySearch],
            view_url:
                "https://kjordan-visualize.vercel.app/algorithms/searching/binary-search/demo",
            isOnDevelopment: false,
            tags: ["REACT.JS"],
        },
        {
            id: "PP-004",
            title: "Linear Search Visualizer",
            description: "To visualize the linear search algorithm.",
            img_url: [LinearSearch],
            view_url:
                "https://kjordan-visualize.vercel.app/algorithms/searching/linear-search/demo",
            isOnDevelopment: false,
            tags: ["REACT.JS"],
        },
    ]);

    return personalProjects;
}

export default usePersonalProjects;