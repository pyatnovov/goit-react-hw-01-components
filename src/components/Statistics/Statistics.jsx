import PropTypes from 'prop-types';
import { Section, List, Item, ItemInfo, Title } from './Statistics.styled';
import { getRandomHexColor } from 'components/utils/GetRandomColor';
export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}
      <List className="stat-list">
        {stats.map(stat => (
          <Item
            className="item"
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <ItemInfo className="label">{stat.label}</ItemInfo>
            <ItemInfo className="percentage">{stat.percentage}%</ItemInfo>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.protoType = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
