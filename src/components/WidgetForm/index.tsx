import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeOptions } from "./FeedbackTypeOptions";
import { FeedbackContent } from "./FeedbackContent";
import { FeedbackSuccess } from "./FeedbackSuccess";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {
                feedbackSent ? (
                    <FeedbackSuccess onFeedRestartRequested={handleRestartFeedback} />
                ) : (
                    <>
                    {!feedbackType ? (
                        <FeedbackTypeOptions onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContent 
                            feedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestartFeedback} 
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                    </>
                )
            }

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a href="#" className="underline-offset-2">Rocketseat</a>                
            </footer>
        </div>
    )
}