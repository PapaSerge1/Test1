{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('task-form').addEventListener('submit', function (e) \{\
    e.preventDefault();\
\
    const taskInput = document.getElementById('task-input');\
    const taskText = taskInput.value.trim();\
\
    if (taskText === '') return;\
\
    const listItem = document.createElement('li');\
    listItem.textContent = taskText;\
    listItem.addEventListener('click', function () \{\
        listItem.classList.toggle('completed');\
    \});\
\
    const taskList = document.getElementById('task-list');\
    taskList.appendChild(listItem);\
\
    taskInput.value = '';\
\});\
}