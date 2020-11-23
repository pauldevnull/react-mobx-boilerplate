import HomeViewModel from 'app/containers/home/home.viewmodel';
import { GlobalStyles } from 'app/types';
import { combinedStyles } from 'app/containers/home/styles';

export interface HomeProps {
  homeViewModel?: HomeViewModel;
}

export interface HomeStyles {
  container: object;
  exchangeHeader: object;
}

export interface CombinedStyles extends GlobalStyles, HomeStyles {}

export type ClassNames = { [className in keyof typeof combinedStyles]: string };

export type HomeClassNames = { classes: ClassNames };
