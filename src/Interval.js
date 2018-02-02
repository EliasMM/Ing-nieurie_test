Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return this.start <= interval.start && this.end >= interval.end
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	var unionStart = 0
	var unionEnd = 0

	if(!this.overlaps(interval)) return [this, interval]

	if (this.start <= interval.start) unionStart = this.start
	else unionStart = interval.start

	if (this.end>=interval.end) unionEnd = this.end
	else unionEnd = interval.end

	return new Interval(unionStart, unionEnd)
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	var unionStart = 0
	var unionEnd = 0

	if(!this.overlaps(interval)) return null

	if (this.start >= interval.start) unionStart = this.start
	else unionStart = interval.start

	if (this.end <= interval.end) unionEnd = this.end
	else unionEnd = interval.end

	return new Interval(unionStart, unionEnd)
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {

};



