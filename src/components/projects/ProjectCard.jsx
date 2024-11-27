import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, Image } from "@nextui-org/react";
import ProjectBadge from './ProjectBadge';
import { useTranslation } from 'react-i18next';

import Github from "../icons/GithubIcon";
import Link from "../icons/LinkIcon";

function ProjectCard({ projects }) {
    const { t } = useTranslation();

    return (
        <>
            {projects.map((project, index) => (
                <Card key={index} className="py-4 shadow-lg bg-gray-800/40">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <Image
                            alt="Card background"
                            className=" rounded-xl w-450 h-300"
                            src={project.image}
                        />
                        <h1 className="mt-4 text-2xl font-bold">{project.title}</h1>
                    </CardHeader>
                    <CardBody className="px-4 overflow-visible pb-2">
                        <div className="flex flex-wrap mb-2">
                            <ul className="flex flex-wrap mb-2 gap-x-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <ProjectBadge key={tagIndex} tag={tag} />
                                ))}
                            </ul>
                        </div>
                        <p className="text-sm text-gray-400">
                            {project.description}
                        </p>
                    </CardBody>
                    <CardFooter className="px-4 flex gap-4">
                        <Button as="a" href={project.github} target="_blank" className="bg-gray-700/40 text-white hover:bg-gray-700/60 hover:ring-1 hover:ring-gray-700">
                            <Github color={'white'} size={6} /> {t('projects.code')}
                        </Button>
                        {project.preview && (
                            <Button as="a" href={project.preview} target="_blank" className="bg-gray-700/40 text-white hover:bg-gray-700/60 hover:ring-1 hover:ring-gray-700">
                                <Link color={'white'} size={12} /> {t('projects.preview')}
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}

export default ProjectCard