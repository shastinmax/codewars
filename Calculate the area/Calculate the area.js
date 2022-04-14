// Write the following function:
//
// function areaOfPolygonInsideCircle(circleRadius, numberOfSides)
// It should calculate the area of a regular polygon of numberOfSides, number-of-sides, or number_of_sides sides inside a circle of radius circleRadius, circle-radius, or circle_radius which passes through all the vertices of the polygon (such circle is called circumscribed circle or circumcircle). The answer should be a number rounded to 3 decimal places.
//
// Input :: Output Examples

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    return ((circleRadius * circleRadius * numberOfSides) * Math.sin((360 / numberOfSides) * 3.14159 / 180)) / 2
}