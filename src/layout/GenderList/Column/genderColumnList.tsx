import { formatDateBasedOnFrequency, formatShortDate } from '@/utils/dates';
import * as S from './genderColumnList.styles'

type GenderListProps = {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
};

interface GenderColumnPropsList {
  items: GenderListProps[];
}

const GenderColumnList = ({ items }: GenderColumnPropsList) => {
  return (
    <S.GendersWrapper>
      {items.map((item) => (
        <S.GenderItem key={item.list_name}>
          <S.TitleWrapper>
            <S.GenderTitle>{item.display_name}</S.GenderTitle>
            <S.UpdatedText>Atualizada em: {formatDateBasedOnFrequency(item.updated)}</S.UpdatedText>
          </S.TitleWrapper>
          <S.DatesWrapper>
            <S.DatesText>Última publicação: {formatShortDate(item.newest_published_date)}</S.DatesText>
            <S.DatesText>Publicação mais antiga: {formatShortDate(item.oldest_published_date)}</S.DatesText>
          </S.DatesWrapper>
        </S.GenderItem>
      ))}
    </S.GendersWrapper>
  );
};

export default GenderColumnList;