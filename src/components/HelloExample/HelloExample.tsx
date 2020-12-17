import {
    ActionButton,
    Button,
    ButtonGroup,
    Content,
    Dialog,
    DialogTrigger,
    Divider,
    Flex,
    Heading,
    View,
} from "@adobe/react-spectrum";
import React, { FC } from "react";
import { analytics, getPageURL } from "utils";

const HelloExample: FC = () => {
    const items = [
        { label: "React", name: "React" },
        { label: "Add", name: "Add" },
        { label: "Delete", name: "Delete" },
    ];

    analytics.pageview();

    const onClick = (buttonName: string) => {
        analytics.set({ page: getPageURL() });
        analytics.event({
            category: "Interaction",
            action: `${buttonName} button clicked!`,
            label: "demo button",
        });
    };

    return (
        <DialogTrigger>
            <View paddingTop="5rem">
                <Flex justifyContent="center">
                    <ActionButton>Open dialog</ActionButton>
                </Flex>
            </View>
            {close => (
                <Dialog>
                    <Heading>ONLINE ORDER</Heading>
                    <Divider />
                    <Content>
                        <ButtonGroup>
                            {items.map(item => (
                                <Button
                                    variant="primary"
                                    key={item.name}
                                    onPress={() => onClick(item.name)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </Content>
                    <ButtonGroup>
                        <Button variant="secondary" onPress={close}>
                            Cancel
                        </Button>
                        <Button variant="cta" onPress={close}>
                            Confirm
                        </Button>
                    </ButtonGroup>
                </Dialog>
            )}
        </DialogTrigger>
    );
};
export default HelloExample;
