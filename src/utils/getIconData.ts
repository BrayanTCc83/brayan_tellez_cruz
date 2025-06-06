import LinkedIn from "/assets/icons/LinkedIn.svg?raw";
import Youtube from "/assets/icons/Youtube.svg?raw";
import GitHub from "/assets/icons/GitHub.svg?raw";
import JavaScript from "/assets/icons/JavaScriptIcon.svg?raw";
import Django from "/assets/icons/Django.svg?raw";
import HTML from "/assets/icons/HTML.svg?raw";
import CSS from "/assets/icons/CSS.svg?raw";
import Cpp from "/assets/icons/Cpp.svg?raw";
import C from "/assets/icons/C.svg?raw";
import Csharp from "/assets/icons/Csharp.svg?raw";
import Python from "/assets/icons/Python.svg?raw";
import React from "/assets/icons/React.svg?raw";
import Godot from "/assets/icons/Godot.svg?raw";

export interface IIconData {
    svg: string
    name: string
};

const icons: {[prop: string]: IIconData} = {
    'js': {
        svg: JavaScript,
        name: 'JavaScript'
    },
    'css': {
        svg: CSS,
        name: 'CSS'
    },
    'html': {
        svg: HTML,
        name: 'HTML'
    },
    'django': {
        svg: Django,
        name: 'django'
    },
    'github': {
        svg: GitHub,
        name: 'GitHub'
    },
    'linkedin': {
        svg: LinkedIn,
        name: 'LinkedIn'
    },
    'youtube': {
        svg: Youtube,
        name: 'YouTube'
    },
    'godot': {
        svg: Godot,
        name: 'Godot'
    },
    'c': {
        svg: C,
        name: 'C'
    },
    'cpp': {
        svg: Cpp,
        name: 'C++'
    },
    'csharp': {
        svg: Csharp,
        name: 'C#'
    },
    'py': {
        svg: Python,
        name: 'Python'
    },
    'react': {
        svg: React,
        name: 'ReactJS'
    }
};

export const getIconData = ( icon: string ): IIconData => {
    return icons[icon];
}