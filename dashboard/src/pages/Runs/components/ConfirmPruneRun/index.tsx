import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal, { Props as ModalProps } from 'components/Modal';
import Button from 'components/Button';

export interface Props extends ModalProps {
    ok: () => void;
}

const ConfirmPruneRun: React.FC<Props> = ({ close, ok, ...props }) => {
    const { t } = useTranslation();

    return (
        <Modal close={close} {...props}>
            <Modal.Title>{t('prune_runs')}</Modal.Title>
            <Modal.Content>{t('confirm_message_prune_runs')}</Modal.Content>

            <Modal.Buttons>
                <Button appearance="red-stroke" onClick={ok}>
                    {t('yes_remove_untagged')}
                </Button>

                <Button appearance="gray-stroke" onClick={close}>
                    {t('cancel')}
                </Button>
            </Modal.Buttons>
        </Modal>
    );
};

export default ConfirmPruneRun;