import { Paragraph, SpacerInline } from '@elements';
import React, { FunctionComponent } from 'react';
import { Image, View } from 'react-native';
import styles from './EmptyStateView.styles';

interface EmptyStateViewProps {
	upperText?: string;
	lowerText?: string;
}

const EmptyStateView: FunctionComponent<EmptyStateViewProps> = ({
	upperText,
	lowerText,
}) => (
	<View style={styles.container}>
		{upperText
			? (
				<>
					<Paragraph textAlign="center" emphasized={true} fontSize={16}>
						{(upperText.toUpperCase())}
					</Paragraph>
					<SpacerInline height={30} />
				</>
			)
			: null}

		<Image source={require('@assets/images/banana1.png')} />

		{lowerText
			? (
				<>
					<SpacerInline height={30} />
					<Paragraph textAlign="center" emphasized={true} fontSize={16}>{lowerText.toUpperCase()}</Paragraph>
				</>
			)
			: null}
	</View>
);

export default EmptyStateView;
