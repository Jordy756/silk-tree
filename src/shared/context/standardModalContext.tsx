import { createContext, ReactNode, useCallback, useRef, useState } from "react";
import StandardModal from "../components/StandarModal";

type StandardModalContextType = {
    title: string;
    content: ReactNode;
    showModal: (title: string, content: ReactNode) => void;
    closeModal: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const StandardModalContext = createContext<StandardModalContextType | undefined>(undefined);

export const StandardModalProvider = ({ children }: { children: ReactNode }) => {
    const standardModalRef = useRef<HTMLDialogElement>(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState<ReactNode>();

    const showModal = (title: string, content: ReactNode) => {
        setTitle(title);
        setContent(content);
        standardModalRef.current?.showModal();
    };

    const closeModal = useCallback(() => standardModalRef.current?.close(), []);

    // const contectValues = useMemo(() => {
    //     return {
    //         title,
    //         content,
    //         showModal,
    //         closeModal,
    //     };
    // }, [title, content, showModal, closeModal]);

    return (
        <StandardModalContext.Provider value={{ title, content, showModal, closeModal }}>
            {children}
            <StandardModal dialogRef={standardModalRef} title={title} closeModal={closeModal}>
                {content}
            </StandardModal>
        </StandardModalContext.Provider>
    );
};
