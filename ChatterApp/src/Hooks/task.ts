
import { DocumentTextIcon } from "@heroicons/react/24/outline";
type IconType = typeof DocumentTextIcon
export interface DataProps {
    id:number;
    title: string;
    description: string;
    icon: IconType;
    time: number | string;
}

export const TaskData: DataProps[] = [
    {
        id:1,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },
     {
        id:2,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },
     {
        id:3,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },
     {
        id:4,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },
     {
        id:5,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },
     {
        id:5,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },
     {
        id:7,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },
     {
        id:8,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    }, {
        id:9,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    }, {
        id:10,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },
     {
        id:11,
        title: "Meet with my mentees",
        description: "Speak with his parents on the progress of their son on the 21st of August",
        icon: DocumentTextIcon ,
        time: "10 A.M"
    },

];