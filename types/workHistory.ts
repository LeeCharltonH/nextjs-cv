export type WorkHistoryItem = {
  company: string;
  date: string;
  p1: string;
  p2?: string;
  title: string;
  achievement1?: string;
  achievement2?: string;
  achievement3?: string;
}

export type WorkHistory = Record<string | number | symbol, WorkHistoryItem>

export type WorkExperienceAccordionBody = Pick<
    WorkHistoryItem,
    'achievement1' 
    | 'achievement2'
    | 'achievement3'
    | 'p1'
    | 'p2'
  >;