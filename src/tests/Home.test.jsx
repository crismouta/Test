import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { test, describe, expect, vi, beforeEach } from "vitest";
import Home from "../pages/Home";
import MyImages from '../pages/MyImages';
import { fetchData } from '../services/API';
import axios from 'axios';

describe('Testing Home component', () => {
    test('home should render correctly', () => {
        render(<Home />);
        const homeText = screen.getByText("My Favorite Images");
        expect(homeText).toBeInTheDocument();
    }),
        test('myimage should render correctly', () => {
            render(<MyImages />);
        })
});

vi.mock('axios')
describe('Get images from Json Server API using axios', () => {
    beforeEach(() => {
        axios.get.mockReset()
    })
    test('makes a GET request to fetch images', async () => {
        const imagesMock = [{ id: 1, title: "Árbol", }, { id: 2, title: "Lago" }]
        axios.get.mockResolvedValue({
            data: imagesMock,
        })

        const images = await fetchData()
        const URL = "http://localhost:3000/images"
        expect(axios.get).toHaveBeenCalledWith(URL)
        expect(images).toStrictEqual(imagesMock)
    })
});